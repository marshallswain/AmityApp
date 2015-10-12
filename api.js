var config = require('./config');
var bson = require('./utils/bson');

var mongoServer = require('./mongoServer');


// Retrive the server Info
exports.status = function(req, res, next){
  // Get the admin db.
  var db = mongoServer.attr('admin');

  db.serverStatus(function(err, info) {
    return res.json(info);
  });
};


//Update database list
exports.databases = function(req, res) {

  console.log(arguments);

  // Get the admin db.
  var db = mongoServer.attr('admin');

  db.listDatabases(function(err, dbs) {
    if (err) {
      //TODO: handle error
      console.error(err);
    }

    var databases = dbs.databases;

    for (var i = 0; i < databases.length; i++) {

      var dbName = databases[i].name;

      console.log(dbName);

      //'local' is special database, ignore it
      if (dbName === 'local') {
        databases.splice(i, 1);
      }

      if (config.mongodb.whitelist.length !== 0) {
        if (!_.include(config.mongodb.whitelist, dbName)) {
          databases.splice(i, 1);
        }
      }
      if (config.mongodb.blacklist.length !== 0) {
        if (_.include(config.mongodb.blacklist, dbName)) {
          databases.splice(i, 1);
        }
      }
    }

    return res.json(databases);
  });
};

//Update the collections list
exports.collectionsFromDB = function(db, dbName, callback) {
  db.collectionNames(function (err, result) {
    var names = [];

    for (var r in result) {
      var coll = utils.parseCollectionName(result[r].name);
      names.push(coll.name);
    }

    collections[dbName] = names.sort();

    if (callback) {
      callback(err);
    }
  });
};
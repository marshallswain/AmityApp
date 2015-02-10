var mongodb = require('mongoskin');

/**
 * Manages all instances of feathers-amity-mongodb.
 * Each instance will manage one server.
 *
 * @param  {String} host   Host name of the server.  Used to access it from
 *                         other parts of the app.
 * @param  {Object} config The server connection details.  The app will
 *                         connect to this MongoDB server with the supplied
 *                         credentials.
 * @param  {Object} app    The FeathersJS app instance.
 * @return {Amity Object}  An Amity server object to be registered.
 */
module.exports = function(host, config, app) {
	//Set up database
	var host = config.mongodb.server || 'localhost';
	var port = config.mongodb.port || mongodb.Connection.DEFAULT_PORT;
	var dbOptions = {
	  auto_reconnect: config.mongodb.autoReconnect,
	  poolSize: config.mongodb.poolSize
	};

	var dbServer = new mongodb.Db('local', new mongodb.Server(host, port, dbOptions), {safe:true});

	dbServer.open(function(err, db){
		db.admin(function(err, adminDb) {
		  // // Set the database
		  // TODO: Get the db out for the rest of the app to use.
		  // mongoServer.attr('admin', a);
		  if (config.mongodb.adminUsername.length == 0) {
		    console.log('Admin Database connected 1');
		  } else {
		    // Auth details were supplied, authenticate admin account with them
		    adminDb.authenticate(config.mongodb.adminUsername, config.mongodb.adminPassword, function(err, result) {
		      if (err) {
		        //TODO: handle error
		        console.error(err);
		      }
		      console.log('Admin Database connected 2');
		    });
		  }
		});
	});

	var dbService = require('feathers-mongo-database')(dbServer, config);
	var api = require('./api');

	//Routes
	app.get(config.site.baseUrl+'api/databases', api.databases);

	return dbService;
};

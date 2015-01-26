var async = require('async'),
	MongoClient = require('mongodb').MongoClient,
	feathersMongoDBs = require('./feathers-mongodb-databases'),
	feathersMongoColls = require('./feathers-mongodb-collections'),
	feathersMongo = require('feathers-mongodb'),
	mongoURI = require('mongo-uri');

/**
 * Amity-MongoDB connects to a MongoDB server and uses several Feathers
 * service types to manage either the entire server (multiple databases)
 * or a single database.
 *
 * The modules used are as follows:
 * 	 amity-mongodb - This module. In charge of the overall MongoDB server.
 *   feathers-mongodb-databases   - to manage databases on the server
 *   feathers-mongodb-collections - to manage collections in those databases
 *   feathers-mongodb             - to manage documents in each collection
 *   feathers-mongodb-users       - to manage user permissions
 *
 * Each instance will manage up to one full server. (It might manage a partial server.)
 *
 * @param  {Object} config - Can be either the hostname of the server or the
 *                         server connection details. The app will
 *                         connect to this MongoDB server with the supplied
 *                         credentials.
 * @return {Object}  An Adapter to be registered on the Amity app.
 */
module.exports = function(config) {

	var amityMongo = {
		type:'mongodb',
		scope:'server',
		uri: '',
		db:null,
		namespace:'',
		connect: function(callback){
			var self = this;

			// Get a list of the servers.
			MongoClient.connect(this.uri, function(err, db) {
				if (err) {
					console.log(err);
				}
			  console.log("Amity-MongoDB connected to server " + self.namespace);

				// Access to the db after it has been set up.
				self.db = db;

			  adminDB = db.admin();

			  // Get a list of databases to register collection managers on.
			  adminDB.listDatabases(function(err, dbs){
			  	if (err) {
			  		console.error(err);
			  	} else if (dbs.databases){

			  		// Add the db manager to the list of amity_ services.
			  		self.amity_dbManager.push({'name':'_databases', service:feathersMongoDBs(db, 'server')});

	  			  self.databases = dbs.databases;

	  			  // Setup a collection service on each database.
  			  	async.each(dbs.databases, setupCollectionService, function(err){

  			  		// Get collections for each database.
	  			  	async.each(dbs.databases, listCollections, function(err){
  		  	    	callback(null, self);
  			  		});

	  			  });

	  			// We only have access to one database.
			  	} else {

			  		// Add the db manager to the list of amity_ services.
			  		self.amity_dbManager.push({'name':'_databases', service:feathersMongoDBs(db, 'database')});

				  	// Ready a service for managing the collections on the db.
				  	setupCollectionService(db, function(err){
				  		listCollections(db, function(err){
				  			if (err) {
				  				callback(err);
				  			} else {
				  				callback(null, self);
				  			}
				  		});
				  	});
			  	}
			  });
			});

		},


		getStatus: function(callback){
			var adminDB = this.db.admin();
			adminDB.serverStatus(function(err, status){
				callback(status);
			});
		},
		amity_dbManager:[],
		amity_collManager:[],
		amity_collections:[],
		amity_users:[]
	};

  function listCollections(database, cb){
  	// If there is a databaseName, we have access to only one db.
  	var db = database.databaseName ? database : amityMongo.db.db(database.name);
  	// Get the collections from the database.
  	db.listCollections().toArray(function(err, collections) {
  		// Set up a document service for each collection.
	  	async.each(collections, setupDocumentService, function(err){
  	    if (err) {
  	    	cb(err);
  	    } else {
  	    	cb();
  	    }
	  	});
  	});
  };

	// Prepares a service to manage collections on the database.
	// This service will be set up by the Amity server.
	function setupCollectionService(database, callback){
		var dbName = database.databaseName || database.name;
		var options = {
			name:dbName + '/_collections',
			service:feathersMongoColls(amityMongo.db, dbName)
		};
		amityMongo.amity_collManager.push(options);
		callback();
	};

	// Prepares a service to manage documents in the provided collection.
	// This service will be set up by the Amity server.
	function setupDocumentService(collection, callback){
  	// Prep the collection name.
  	var colName = collection.name.split('.');
  	var dbName = colName.shift();
  	colName = colName.join('.');

  	var database = amityMongo.db.db(dbName);

  	options = {
  		name:dbName + '/' + colName,
  		service:feathersMongo({collection:database.collection(colName)})
  	};
  	amityMongo.amity_collections.push(options);
  	callback();
	};

	function createNamespace(connectionString){
		// Parse the connectionString.
		uri = mongoURI.parse(connectionString);

		amityMongo.namespace = config.nickname || uri.hosts[0] + ':' + uri.ports[0];
	};

	// If the config is a string, it's the MongoDB URI
	var uri;
	if (typeof config === 'string') {
		// Put the URI in place for connect().
		amityMongo.uri = config;
		createNamespace(config);

	// Otherwise, if a uri attribute was passed in...
	} else if(config.uri) {
		// ... put the URI in place for connect().
		amityMongo.uri = config.uri;

		createNamespace(config.uri);
	}



	// This deferred must resolve with the fully-connected adapter.
	return amityMongo;
};

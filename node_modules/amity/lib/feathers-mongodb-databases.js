var async = require('async');

/**
 * A feathers service to manage CRUD on MongoDB databases.
 * Pass in a connected MongoClient and it will allow you to create,
 * read, update, and delete databases on the client.
 */
module.exports = function(db, scope) {

	var adminDB = db.admin();

	var dbService = {
		// Scope is either 'server' or 'database'.
		// If scope is server, use adminDB, otherwise, it's a single db.
		scope:scope,
		find: function(params, callback) {

			var dbList = [];

	  	// Async function to add stats to each db.
	  	function addStats(database, cb){
  			// If a databaseName is present, it's a single db.  No need to switch.
				changeDB = database.databaseName ? database : db.db(database.name);

	  		// Get the stats
	  		changeDB.stats(function(err, stats){
	  			// Remove 1 from collection count, unless it's zero. Not sure why it's 1 off.
	  			if (stats.collections) {
		  			stats.collections--;
	  			}
	  			// Rename collections to avoid collisions on the client app.
	  			stats.collectionCount = stats.collections;
	  			delete stats.collections;
	  			// Add the stats to the corresponding database.
	  			dbList.push(stats);
		  		cb(null, database);
	  		});
	  	}

			if (scope === 'server') {
				// Get a list of all databases on the server.
			  adminDB.listDatabases(function(err, dbs){

			  	async.each(dbs.databases, addStats, function(err){
		  	    if (err) {
		  	    	console.log(err)
		  	    	callback(err);
		  	    } else {
		  	    	dbList.sort(function(a, b){
		  	    		return a.db.toLowerCase().localeCompare(b.db.toLowerCase());
		  	    	});
						  callback(null, dbList);
		  	    }
			  	});
			  });

			// We only have access to one database.
			} else {
				addStats(db, function(err){
				  callback(null, dbList);
				});
			}

		},

		create: function(data, params, callback) {
			console.log(data);
			callback(null, data);
		},

		update: function(id, data, params, callback) {
			console.log(data);
			callback(err, data);
		},

		remove: function(id, params, callback) {
			console.log(data);
			callback(err, data);
		},

		setup: function(app) {
			console.log(path);
			// this.service = app.service.bind(app);
		}
	};

	return dbService;
};

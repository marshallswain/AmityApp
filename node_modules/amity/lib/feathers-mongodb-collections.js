'use strict';

var async = require('async');

/**
 * A feathers service to manage CRUD on MongoDB collections in a provided database.
 * It will allow you to create, read, update, and delete databases on the client.
 *
 * @param  {Object} db [description]
 * @param  {String} collectionName - The name of the collection to be acted upon.
 * @return {Object} - The feathers service.
 */
module.exports = function(db, dbName) {

	function parseName(colName){
		return colName.replace(dbName+'.', '');
	};

	var dbService = {

		/**
		 * Returns a list of collections belonging to the configured database(s).
		 * Adds stats to each collection.
		 */
		find: function(params, callback) {
			var collections = [];
		  var changeDB = db.db(dbName);
		  // Get the collections for this dbName
	  	changeDB.listCollections().toArray(function(err, colls) {
			  // Loop through the collections
	  		for (var n = 0; n < colls.length; n++) {

	  			var options = colls[n].options || {};
	  			// Remove the old name.
	  			delete options.create;
		  		// Remove the dbName from the collection name.
	  			options.name = parseName(colls[n].name);

	  			// Add it to the list.
	  	  	collections.push(options);
	  	  };

		  	// Async function to add stats to each collection.
		  	var addStats = function(coll, callback){
		  		// Switch databases
		  		var collection = changeDB.collection(coll.name);
		  		// Get the stats. null if empty.
		  		collection.stats(function(err, stats){
		  			// Add the stats to the corresponding database.
		  			coll.stats = stats;
			  		callback(err, coll);
		  		});
		  	}
		  	async.each(collections, addStats, function(err){
	  	    if (err) {
	  	    	callback(err);
	  	    } else {
	  	    	// Sort the collections
	  	    	collections.sort(function (a, b) {
	  	    		return (a.name > b.name) ? 1 : -1;
	  	    	});
	  	    	// Send the collections
					  callback(null, collections);
	  	    }
		  	});
	  	});
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

		setup: function(app, path) {
			console.log(path);
			// this.service = app.service.bind(app);
		}
	};

	return dbService;
};

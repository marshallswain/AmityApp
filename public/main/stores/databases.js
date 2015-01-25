'use strict';

// Stores a list of databases, keyed by server name.
var databaseStore = {};

// Pass in a location consisting of 'hostName/dbName'
export function dbStore(location, data){

	// Error & return false if no location.
	if (!location) {
		console.error('Must pass a location to dbStore().');
		return false;
	}

	// Split the location.
	var loc = location.split('/'),
		server = loc[0],
		dbName = loc[1] || false;

	// If no data was passed, we're getting.
	if (!data){
		// If no dbName was passed (after the '/')...
		if(!dbName){
			// Return the entire array of data.
			return databaseStore[server] || false;

		// Else, if a dbName was given and we already have data for the server.
		} else if(databaseStore[server]){
			// Loop through what's there...
			for (var i = databaseStore[server].length - 1; i >= 0; i--) {
				// If there's data matching the dbName, return it.
				if (databaseStore[server][i].name === dbName) {
					return databaseStore[server][i];
				};
			};
			// If no data was found for the dbName, return false;
			console.log('no data found');
			return false;

		} else {
			console.log('no data found here.');
			return false;
		}
	}


	// If data is an array...
	if (data.length) {
		// ... store data, keyed by server.
		databaseStore[server] = data;
		// Return the array.
		return data;

	// Otherwise it's a single db
	} else {
		// Make sure the key exists.
		if (!databaseStore[server]) {
			databaseStore[server] = {};
		}
		// Add it to the store.
		databaseStore[server][data.name] = data;
		// Return the data.
		return data;
	}
};

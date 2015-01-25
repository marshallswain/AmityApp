
// Stores a list of collections, keyed by database name.
var collectionStore = {};

// Pass in a location consisting of 'hostName/dbName/collectionName'
export function collStore(location, data){
	if (!collectionStore[location]) {
		collectionStore[location] = data;
	}
	return collectionStore[location];
};
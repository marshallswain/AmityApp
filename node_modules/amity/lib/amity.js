var MongoAdapter = require('./amity-mongodb');


var amity = {

	// This is a placeholder for the Feathers app that is passed to start().
	app:null,

	// The prefix added to all API endpoints that this Amity instance manages.
	// You'll eventually be able to use this for API versioning.
	// TODO: Enable API versioning by setting up each Amity as its own instance.
	apiPrefix:'api',

	// A list containing host names with ports for each managed server.
	// When adapters are registered with use(), they are added here.
	// This array is sent out when the list of servers is requested.
	serverList:[],

	// The list of the actual connected adapters, keyed by hostname:port.
	// When adapters are registered with use(), they are added here.
	// In the case of replica sets, only the first hostname is used as the key.
	servers:{},

	adapters:{
		// The mongodb adapter comes bundled here for easy reference.
		MongoDB: MongoAdapter
	},

	/**
	 * Register a server store. This is a feathers service that will store
	 * details about configured servers.  Only needs to be used if you
	 * will be storing users and servers separately.
	 */
	setServerConfigStore : function(serverStore){
		// Set up Amity servers storage.
		if (serverStore) {
			amity.app.use('/api/amity/servers', serverStore);
		} else {
			throw new Error('No storage service was configured for Amity servers.');
		}
	},

	/**
	 * Register a user store. This is a feathers service that will store
	 * authentication details for each user.  Only needs to be used if you
	 * will be storing users and servers separately.
	 */
	setUserConfigStore: function(userStore){
		// Set up Amity users storage.
		if (userStore) {
			amity.app.use('/api/amity/users', userStore);
		} else {
			throw new Error('No storage service was configured for Amity users.');
		}
	},

	/**
	 * A shortcut function that will use the provided amity adapter to
	 * initialize both the server store and the user store.
	 */
	setConfigStores: function(store){
		var self = this;

		storeDef.then(function(store){

			// Make sure the store is a server adapter.
			if(store.scope.toLowerCase() === 'server'){

				// First, set up the adapter.
				self.use(store);

				// Then specify the servers store

				// and finally specify the users store

				// Set up the collections.
				var users = store.users || 'amity_users';
				var servers = store.servers || 'amity_servers';

				// this.setServerConfigStore(store, users);
				// this.setUserConfigStore(store, users);

			// If it wasn't an adapter of scope 'server'...
			} else {
				var message = 'When setting up a serverStore, please ' +
					'provide a SERVER adapter. You have passed a ' +
					store.scope + ' adapter.';
				console.error(message);
			}
		});

		return this;
	},



	/**
	 * Export Amity settings through browser download.
	 *
	 * @return {Object} An object literal containing all stored database settings.
	 *                     Maybe it should be a file...
	 */
	exportConfig: function(){},

	/**
	 * Save a backup copy of stored Amity settings.
	 */
	backupConfig: function(){},


	/**
	 * Set up feathers services on the provided adapter.
	 *
	 * It essentially finds any keys that begin with 'amity_' and loops through
	 * the contained array of key-value pairs, setting up the key as the address
	 * namespace and the value is the service.
	 *
	 * An Amity adapter should already specify what type of feathers service
	 * to put on each object.
	 *
	 * @param  {[type]} adapter - An Amity adapter.
	 * @return {this}
	 */
	use: function(adapter){
		var self = this;

		// Make sure an object was passed.
		if (typeof adapter !== 'object') {
			console.error('This is not an Amity adapter object.');
		}

		// Put basic information into the server array. This will be public, so only
		// non-sensitive information is allowed.
		var server = {
			name: adapter.namespace,
			endpoint: self.apiPrefix + '/' + adapter.namespace,
			type:adapter.type
		};
		this.serverList.push(server);

		// Add the adapter to the adapters object, keyed by hostname:port
		// In the case of replica sets, only the first hostname is used as the key.
		this.servers[adapter.namespace] = adapter;

		// Connect the adapter.
		adapter.connect(function(err, adapter){

			// Get the keys that begin with amity_.
			var keys = Object.keys(adapter);
			for (var i = keys.length - 1; i >= 0; i--) {
				if (keys[i].indexOf('amity_') !== 0) {
					keys.splice(i, 1);
				}
			}

			// For each amity_ key...
			keys.forEach(function(key, n){
				// Loop through the list of services,
				adapter[key].forEach(function(el, index) {
					// Build the endpoint address.
					var endpoint = self.apiPrefix + '/' + adapter.namespace + '/' + el.name;
					// And set up each service.
					self.app.use(endpoint, el.service);
				});
			});
		});

		return server;
	},


	/**
	 * Sets up where Amity stores its configuration and settings.
	 * @param  {app} app  The Feathers app - The config services will be
	 *                    set up on the api/amity/... namespace.
	 * @return {Amity Object}  The main Amity instance.
	 */
	start: function(app, config, store, userStore){

		// If a prefix was given...
		if (config.apiPrefix) {
			// ...put the prefix in place.
			this.apiPrefix = config.apiPrefix;
		}

		// Make sure the feathers app was provided.
		if (!app) {
	    throw new Error('No Feathers app was provided.');
		}
		this.app = app;

		// If there's only a store passed in...
		if (store && !userStore) {
			// Use it as both the server and user store.
			this.use(store);
		}

		this.app.use('/amity/servers', serverService);

		return this;
	}

};




/**
 * A service to inform which servers are set up.
 */
var serverService = {

	// Returns a list of connected services.
	find: function(params, callback) {
	  callback(null, amity.serverList);
	},

	/**
	 * Note that the id argument has been hijacked to use as a method name.
	 *
	 * The "status" method returns the server status for the passed in hostname.
	 * params.hostname is the only requirement.
	 * The adapter must have a getStatus function for this to work.
	 */
	get: function(method, params, callback) {

		// The "status" method
		if (method === 'status') {

			var hostname = params.query.hostname;

			// Make sure params.hostname was passed in.
			if (!hostname) {
			  return callback('ERROR: You must pass in a hostname attribute.');
			}

			// If a server exists with this hostname...
			if (amity.servers[hostname]) {
				// And it has a getStatus method...
				if (amity.servers[hostname].getStatus) {
					amity.servers[hostname].getStatus(function(status){
						var data = {
							hostname: hostname,
							status:status
						};
					  callback(null, data);
					})
				} else {
				  callback('ERROR: The server at ' + hostname + ' does not have a getStatus method.');
				}

			} else {
				// Otherwise, send an error message to the client.
				callback('ERROR: An adapter for a server at ' + hostname +' does not exist.')
			}

			// Get the matching adapter.

		// A supported method was not used.
		} else {
			// Send an error message to the client.
			callback('ERROR: The "' + method + '" method is not supported. '+
				'"status" is the only currently-supported option.');
		}

	},

	/**
	 * Connects a new server.
	 * @param  {[type]}   data     [description]
	 * @param  {[type]}   params   [description]
	 * @param  {Function} callback [description]
	 * @return {[type]}            [description]
	 */
	create: function(data, params, callback) {
		// Must have at least connect and type data.
		if (data.uri && data.type) {


			// See if there is a matching adapter.
			var match;
			var types = Object.keys(amity.adapters);
			// Use toLowerCase() to simplify.
			for (var i = types.length - 1; i >= 0; i--) {
				if (types[i].toLowerCase() === data.type.toLowerCase()) {
					match = types[i];
				}
			}
			// If we didn't find a match...
			if (!match) {
				// ... return and let the let the client know.
				return callback('ERROR: Could not find a registered adapter of type ' + data.type);
			}

			// Retrieve the adapter.
			var Adapter = amity.adapters[match];
			// Use it.
			var server = amity.use(new Adapter(data.uri));

			console.log(server);

			return callback(null, server);
		} else {
			return callback('ERROR: Must provide connect and type attributes.');
		}
	}

};

// External access to the bundled Amity-MongoDB adapter.
// exports.Mongodb = require('./amity-mongodb');

module.exports = amity;

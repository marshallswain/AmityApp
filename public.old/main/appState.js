'use strict';

import '../../models/models';
import {getDbModel} from '../../models/dbModels';
import {getCollModel} from '../../models/collModels';
import {getDocumentModel} from '../../models/documentModels';

// Resolve this with the collections when the database changes.
var dbDef = new can.Deferred();
var collDef = new can.Deferred();
var docDef = new can.Deferred();

import {dbStore} from './stores/databases';
import {collStore} from './stores/collections';


// Defines the state of the application
var AppState = can.Map.extend({
	define : {
		servers:{
			serialize:false,
			value: new can.List(),
		},

		hostname:{
			serialize:true,
			set(value){
				var self = this;
				// Loop through the servers
				this.attr('servers').forEach(function(el, index) {
					// If one matches the current value...
					if (el.name === value) {
						// Set it up as this.server
						self.attr('server', el);
					}
				});
				return value;
			}
		},

		server:{
			serialize:false,
			set(server){
				var self = this;
				var resource = '/api/' + server.name + '/_databases';

				// Get/Create a model for this resource.
				getDbModel(resource).findAll({}, function(dbs){

					// Cache the dbs in the dbStore.
					dbStore(server.name, dbs);

					self.attr('databases', dbs);
					dbDef.resolve(dbs);
				});

				return server;
			}
		},

		// The databases for the current server.
		databases: {
			serialize:false,
			set(value){
				return value;
			},
			value: new can.List()
		},

		db_name:{
			serialize: true,
			set(dbName){
				var self = this;
				// Wait until we have the list.
				dbDef.done(function(){
					var server = self.hostname;
					self.attr('database', dbStore(server + '/' + dbName));
				});
				return dbName;
			},
			remove(){
				this.attr('database', {});
			}
		},

		database:{
			// When a db is set, get its collections.
			set(value){
				var self = this;
				var resource = '/api/' + this.attr('hostname') + '/' + value.db + '/' + '_collections';
				getCollModel(resource).findAll({}, function(colls){
					self.attr('collections', colls);
					collDef.resolve(colls);
				});
				return value;
			},
			serialize:false
		},

		collections: {
			serialize:false,
			value: new can.List(),
			set(value){
				return value;
			},
		},

		coll_name:{
			set(value){
				var self = this;

				collDef.done(function(colls){
					for (var i = colls.length - 1; i >= 0; i--) {
						if (value === colls[i].name) {
							self.attr('collection', colls[i]);
						}
					}
				});
				return value;
			},
			remove(){
				this.attr('collection', {});
				this.attr('page', 'database');
			}
		},

		collection:{
			serialize:false,
			value:{},
			set(collection){
				if (collection.attr('name')) {
					var self = this;
					var resource = '/api/' + this.attr('hostname') + '/' + this.attr('db_name') + '/' + collection.name;
					getDocumentModel(resource).findAll({}, function(docs){
						self.attr('documents', docs);
						docDef.resolve(docs);
					});
					return collection;
				}
			},
		},

		page:{
			serialize:false
		},

		documents: {
			serialize:false,
			value:new can.List(),
			set(value){
				return value;
			}
		},

		doc_id:{}

	},

});

var appState = new AppState();
export default appState;
window.appState = appState;

can.route.map(appState);

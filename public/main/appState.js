'use strict';

import '../../models/models';
import {getDbModel} from '../../models/models';
import {getModel} from '../../models/models';

// Resolve this with the collections when the database changes.
var colDef = new can.Deferred();
var dbDef = new can.Deferred();


// Defines the state of the application
var AppState = can.Map.extend({
	define : {
		servers:{
			serialize:false,
			value: new Server.List(),
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
					};
				});
				return value;
			}
		},

		server:{
			serialize:false,
			set(value){
				var self = this;

				var resource = '/api/' + value.name + '/_databases';

				getDbModel(resource).findAll({}, function(dbs){
					self.attr('databases').replace(dbs);
					dbDef.resolve(dbs);
				});

				// var list = new model.List({});
				// this.attr('databases', list);

				// Set the databases.
				return value;
			}
		},


		databases: {
			serialize:false,
			set(value){
				return value;
			},
			value: new can.List()
		},

		db_name:{
			set(value){
				var self = this;
				dbDef.done(function(dbs){
					for (var i = dbs.length - 1; i >= 0; i--) {
						if (value == dbs[i].name) {
							self.attr('database', dbs[i]);
						};
					};

				});
				return value;
			},
			remove(){
				this.attr('database', {});
			}
		},

		database:{
			// When a db is set, get its collections.
			set(value){
				var self = this;

				var resource = '/api/' + this.attr('hostname') + '/' + value.name + '/' + '_collections';
				console.log(resource);
				getModel(resource).findAll({}).then(function(colls){
					console.log(colls);
					self.attr('collections').replace(colls);
				});

				return value;
			},
			serialize:false
		},

		collections: {
			serialize:false,
			value: new can.List(),
			set(value){

				// console.log('resolving colDef')
				colDef.resolve(value);

				return value;
			},
		},

		col_name:{
			set(value){
				var self = this;

				colDef.done(function(cols){
					for (var i = cols.length - 1; i >= 0; i--) {
						if (value == cols[i].name) {
							self.attr('collection', cols[i]);
						};
					};
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
			set(value){
				// this.attr('docs', new Doc.List({'database':this.attr('database'), 'collection':value}));
				return value;
			},
		},

		page:{
			serialize:false
		},

		docs: {
			set(value){
				console.log(value);
			},
			serialize:false
		},

		doc_id:{}

	},

});

var appState = new AppState();
export default appState;
window.appState = appState;

can.route.map(appState);

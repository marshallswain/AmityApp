'use strict';

import '../../models/models';

// Resolve this with the collections when the database changes.
var colDef = new can.Deferred();

// Defines the state of the application
var AppState = can.Map.extend({
	define : {

		databases: {
			value: new Database.List(),
			serialize:false
		},

		db_name:{
			set(value){
				for (var i = this.attr('databases').length - 1; i >= 0; i--) {
					if (value == this.attr('databases')[i].name) {
						this.attr('database', this.attr('databases')[i]);
					};
				};
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
				console.log('database: ');
				console.log(value);
				Collection.findAll({database:value.name}, function(cols){
					self.attr('collections', cols);


				});
				return value;
			},
			serialize:false
		},

		collections: {
			set(value){
				console.log('collections');
				console.log(value);

				console.log('resolving colDef')
				colDef.resolve(value);

				return value;
			},
			serialize:false
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
			value:{},
			set(value){
				console.log('collection: ' + value);
				// this.attr('docs', new Doc.List({'database':this.attr('database'), 'collection':value}));
				return value;
			},
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

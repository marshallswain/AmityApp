'use strict';

import appState from '../../appState';
import './drop-collection/drop-collection';
import './add-collection/add-collection';

can.Component.extend({
	tag: 'page-database',
	template: can.view('/main/components/page-database/page-database.stache'),
	scope: {
		appState:appState,

		goHome: function(scope, el, ev){
			can.route.removeAttr('db_name');
			can.route.removeAttr('hostname');
			can.route.attr('page', 'home');
		},

		gotoServer: function(scope, el, ev){
			can.route.removeAttr('db_name');
			can.route.attr('page', 'server');
		},

		openCollection:function(scope, el, ev){
			can.route.attr('coll_name', scope.name);
			can.route.attr('page', 'collection');
		},

		editCollection:function(scope, el, ev){
			// Save the name for if we cancel.
			scope.attr('_name', scope.name);
			// Get a reference to the cell before we make changes.
			var cell = el.parents('td');
			scope.attr('editing', true);
			// Select all text inside input.
			cell.children('input').focus().select();
		},

		escape:function(scope, el, ev){
			if (ev.which === 27) {
				scope.removeAttr('editing');
			}
		},

		cancel:function(scope, el, ev){
			// Restore the original name.
			scope.attr('name', scope._name);
			scope.removeAttr('_name');
			// Stop editing.
			scope.removeAttr('editing');
		},

		saveCollection:function(scope, el, ev){
			// Remove backup copy of name.
			scope.removeAttr('_name');
			ev.preventDefault();
			scope.removeAttr('editing');
			scope.save();
		},

		localColl:{
			name:''
		},

		changeCollection:function(scope){
			this.attr('localColl', scope);
		}
	},
	events: {},
	helpers:{
		number:function(x){
			if (x()) {
				return x().toString().replace(/,/g, '').replace(/\B(?=(\d{3})+(?!\d))/g, ',');
			}
		},

		index:function(i){
			return i()+1;
		},

		hasFavorites:function(){
			var faves = false;
			appState.attr('databases').forEach(function(el){
				if (el.favorite) {
					faves = true;
				}
			});
			return faves;
		}
	}
});

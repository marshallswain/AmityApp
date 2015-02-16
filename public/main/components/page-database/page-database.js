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

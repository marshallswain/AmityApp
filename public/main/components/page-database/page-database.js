'use strict';

import appState from '../../appState';

can.Component.extend({
	tag: 'page-database',
	template: can.view('/main/components/page-database/page-database.stache'),
	scope: {
		appState:appState,

		goHome: function(scope, el, ev){
			can.route.removeAttr('db_name');
			can.route.attr('page', 'home');
		},

		gotoServer: function(scope, el, ev){
			can.route.removeAttr('db_name');
			can.route.attr('page', 'server');
		},

		openCollection:function(scope, el, ev){
			ev.preventDefault();
			can.route.attr('page', 'collection');
			can.route.attr('collection', scope);
			can.route.attr('col_name', scope.name);
		}
	},
	events: {},
	helpers:{
		number:function(x){
			if (x()) {
				return x().toString().replace(/,/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ",");
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
				};
			});
			return faves;
		}
	}
});

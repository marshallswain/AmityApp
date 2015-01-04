'use strict';

import appState from '../../appState';

can.Component.extend({
	tag: 'page-database',
	template: can.view('/main/components/page-database/page-database.stache'),
	scope: {
		appState:appState,

		home: function(scope, el, ev){
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
			return x().toString().replace(/,/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ",");
		},

		index:function(i){
			return i()+1;
		}
	}
});

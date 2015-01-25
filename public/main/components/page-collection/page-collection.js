'use strict';

import './query-builder/query-builder';
import appState from '../../appState';

can.Component.extend({
	tag: 'page-collection',
	template: can.view('/main/components/page-collection/page-collection.stache'),
	scope: {
		appState:appState,

		goHome: function(scope, el, ev){
			can.route.removeAttr('db_name');
			can.route.removeAttr('coll_name');
			can.route.attr('page', 'home');
		},

		gotoServer: function(scope, el, ev){
			can.route.removeAttr('db_name');
			can.route.removeAttr('coll_name');
			can.route.attr('page', 'server');
		},

		gotoDB:function(){
			can.route.removeAttr('coll_name');
			can.route.attr('page', 'database');
		}
	},
	events: {},
	helpers:{}
});

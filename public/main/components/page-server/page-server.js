'use strict';

import appState from '../../appState';

can.Component.extend({
	tag: 'page-server',
	template: can.view('/main/components/page-server/page-server.stache'),
	scope: {
		appState: appState,

		selectDB: function(scope, el, ev){
			can.route.attr('db_name', scope.name);
			can.route.attr('page', 'database');
		}
	},
	events: {},
	helpers:{}
});

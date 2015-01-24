'use strict';

import appState from '../../appState';
import './server-status/server-status';
import './db-tile/db-tile';
import './db-table/db-table';

can.Component.extend({
	tag: 'page-server',
	template: can.view('/main/components/page-server/page-server.stache'),
	scope: {
		appState: appState,

		selectDB: function(scope, el, ev){
			can.route.attr('db_name', scope.name);
			can.route.attr('page', 'database');
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
	},
	events: {},
	helpers:{

	}
});

'use strict';

import './db-tile.css!';

can.Component.extend({
	tag: 'db-tile',
	template: can.view('/main/components/page-server/db-tile/db-tile.stache'),
	scope: {
		selectDB: function(scope, el, ev){
			can.route.attr('db_name', scope.db);
			can.route.attr('page', 'database');
		},

		toggleFave:function(scope, el, ev){
			console.log('toggleFave');
			return this.attr('favorite');
		}
	},
	events: {},
	helpers:{

	}
});

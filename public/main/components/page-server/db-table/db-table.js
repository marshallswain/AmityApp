'use strict';

can.Component.extend({
	tag: 'db-table',
	template: can.view('/main/components/page-server/db-table/db-table.stache'),
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

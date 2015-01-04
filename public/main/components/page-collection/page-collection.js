'use strict';

can.Component.extend({
	tag: 'page-collection',
	template: can.view('/main/components/page-collection/page-collection.stache'),
	scope: {
		goHome: function(scope, el, ev){
			can.route.removeAttr('db_name');
			can.route.removeAttr('col_name');
			can.route.attr('page', 'server');
		},

		gotoDB:function(){
			can.route.removeAttr('col_name');
		}
	},
	events: {},
	helpers:{}
});

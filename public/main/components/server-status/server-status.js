'use strict';

can.Component.extend({
	tag: 'server-status',
	template: can.view('/main/components/server-status/server-status.stache'),
	scope: {
		stats:{},

		loading:function(){
			var self = this;

			can.$.ajax({
				url: 'api/status',
			})
			.done(function(data) {
				console.log("success");
				self.attr('stats', data);
			});
		},

		refresh:function(scope, el, ev){
			this.loading();
		}

	},
	events: {},
	helpers:{}
});

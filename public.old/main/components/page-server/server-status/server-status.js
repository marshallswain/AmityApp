'use strict';

import Server from '../../../models/models';

can.Component.extend({
	tag: 'server-status',
	template: can.view('/main/components/page-server/server-status/server-status.stache'),
	scope: {
		stats:{},

		loading:function(){
			var self = this;

			// Make the arrows spin
			this.attr('spin', true);

			if (can.route.attr('hostname')) {
				can.$.ajax({
					url: 'amity/servers/status?hostname='+ can.route.attr('hostname'),
				})
				.done(function(data) {
					self.attr('stats', data);
					// Stop the spinning arrows
					setTimeout(function() {
						self.attr('spin', false);
					}, 1000);
				});
			}
		},

		refresh:function(scope, el, ev){
			this.loading();
		},

		spin:false
	},
	helpers:{
		milliHumanize:function(value){
			return moment.duration(value()).humanize();
		},

		secondsHumanize:function(value){
			return moment.duration(value(), 'seconds').humanize();
		},

	}
});

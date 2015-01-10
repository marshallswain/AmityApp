'use strict';

can.Component.extend({
	tag: 'server-status',
	template: can.view('/main/components/server-status/server-status.stache'),
	scope: {
		stats:{},

		loading:function(){
			// Make the arrows spin
			this.attr('spin', true);

			var self = this;

			can.$.ajax({
				url: 'api/status',
			})
			.done(function(data) {
				self.attr('stats', data);
				// Stop the spinning arrows
				setTimeout(function() {
					self.attr('spin', false);
				}, 1000);
			});
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

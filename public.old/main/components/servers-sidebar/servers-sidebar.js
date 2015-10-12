'use strict';

import appState from '../../appState';
import './servers-sidebar.css!';

can.Component.extend({
	tag: 'servers-sidebar',
	template: can.view('/main/components/servers-sidebar/servers-sidebar.stache'),
	scope: {
		appState:appState,
		selectServer:function(scope, el, ev){
			appState.attr('hostname', scope.name);
			appState.attr('page', 'server');
		}
	},
	helpers:{}
});

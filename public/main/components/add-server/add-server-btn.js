'use strict';

import appState from '../../appState';

can.Component.extend({
	tag: 'add-server-btn',
	template: can.view('/main/components/add-serve/add-server-btn.stache'),
	scope: {
		appState:appState
	}
});
'use strict';

var count = 0;

can.Component.extend({
	tag: 'code-editor',
	template: can.view('/main/components/code-editor/code-editor.stache'),
	scope: {
		count:++count,
		id:'ObjectID("5359550868cc9b2b372e2ea1")'
	},
	events: {},
	helpers:{}
});

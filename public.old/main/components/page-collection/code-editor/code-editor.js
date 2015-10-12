'use strict';

import './code-editor.css!';

var count = 0;

can.Component.extend({
	tag: 'code-editor',
	template: can.view('/main/components/page-collection/code-editor/code-editor.stache'),
	scope: {
		count:++count,

		id:'ObjectID("5359550868cc9b2b372e2ea1")',

		editor:null

	},
	events: {},
	helpers:{
		index:function(i){
			return i()+1;
		},

		codemirror:function(doc){
			var self = this;
			return function(el){
				self.editor = CodeMirror(el, {
				  value: JSON.stringify(doc().attr(), null, 2),
				  mode: { name: "javascript", json: true },
				  indentUnit: 4,
				  lineNumbers: true,
				  autoClearEmptyLines: true,
				  matchBrackets: true,
				  theme: "monokai"
				});
				setTimeout(function(){
					$('.CodeMirror').each(function(i, el){
					    el.CodeMirror.refresh();
					});
				}, 0);
			}
		}
	}
});
'use strict';

can.Component.extend({
	tag: 'drop-collection',
	template: can.view('/main/components/page-database/drop-collection/drop-collection.stache'),
	scope:{
		deleteCollection:function(scope){
			scope.destroy();
		}
	},
	helpers:{
		plural: function(count){
			if (count() > 1) {
				return 'documents';
			} else {
				return 'document';
			}
		}
	}
});
'use strict';

can.Component.extend({
	tag: 'drop-collection',
	template: can.view('/main/components/page-database/drop-collection/drop-collection.stache'),
	scope:{
		deleteCollection:function(scope){
			console.log(scope);
			scope.destroy(function(response){
				console.log(response);
			});
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
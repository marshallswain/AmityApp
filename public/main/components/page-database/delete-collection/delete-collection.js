'use strict';

can.Component.extend({
	tag: 'delete-collection',
	template: can.view('/main/components/page-database/delete-collection/delete-collection.stache'),
	scope:{},
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
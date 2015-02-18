'use strict';

import './add-collection.css!';
import {getCollModel} from '../../../models/collModels';

can.Component.extend({
	tag: 'add-collection',
	template: can.view('/main/components/page-database/add-collection/add-collection.stache'),
	scope: {
		newCollection:{
			name:''
		},
		create:function(scope){
			if (scope.name) {
				var resource = '/api/' + can.route.attr('hostname') +
					'/' + can.route.attr('database.db') + '/' + '_collections';
				var Model = getCollModel(resource);
				new Model({
					id:scope.name,
					name:scope.name
				}).save(function(model){
					console.log('saved');
					console.log(model);
				});
			}
		}
	},
	events: {},
	helpers:{}
});

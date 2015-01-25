'use strict';

var models = {};

export function getCollModel(resource){
	if (!models[resource]) {
		models[resource] = can.Feathers.Model.extend({
			resource:resource
		}, {});
	}
	return models[resource];
}
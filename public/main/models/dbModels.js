'use strict';

var models = {};

export function getDbModel(resource){
	if (!models[resource]) {
		models[resource] = can.Feathers.Model.extend({
			resource:resource
		}, {
			// Returns size of the db using the largest-sized unit.
			dbSize(){
				var bytes = this.attr('dataSize');
				if(bytes == 0) return '0 Byte';
				var k = 1024;
				var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
				var i = Math.floor(Math.log(bytes) / Math.log(k));
				return (bytes / Math.pow(k, i)).toPrecision(3) + ' ' + sizes[i];
			}
		});
	}
	return models[resource];
}
'use strict';

export var Server = can.Feathers.Model.extend('Server', {
	resource: 'servers'
}, {});

// export var Database = can.Model.extend('Database', {
// 	resource: '/api/databases'
// }, {});

// export var Collection = can.Model.extend('Collection', {
// 	resource: '/api/collections'
// }, {});

export var Doc = can.Model.extend('Doc', {
	resource: '/api/documents'
}, {});


export var Task = can.Feathers.Model.extend('tasks', {
	resource: '/api/tasks'
}, {});

export var Todo = can.Feathers.Model.extend('todos', {
	resource: '/api/todos'
}, {});

var models = {};

export function getModel(resource){
	if (!models[resource]) {
		models[resource] = can.Feathers.Model.extend({
			resource:resource
		}, {});
	}
	return models[resource];
}
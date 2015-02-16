'use strict';

export var Server = can.Feathers.Model.extend('Server', {
	resource: 'amity/servers',
	id:'_id'
}, {});

export var Doc = can.Model.extend('Doc', {
	resource: '/api/documents',
	id:'_id'
}, {});

export var Task = can.Feathers.Model.extend('tasks', {
	resource: '/api/tasks',
	id:'_id'
}, {});

export var Todo = can.Feathers.Model.extend('todos', {
	resource: '/api/todos',
	id:'_id'
}, {});

'use strict';

export var Server = can.Feathers.Model.extend('Server', {
	resource: 'amity/servers'
}, {});

export var Doc = can.Model.extend('Doc', {
	resource: '/api/documents'
}, {});

export var Task = can.Feathers.Model.extend('tasks', {
	resource: '/api/tasks'
}, {});

export var Todo = can.Feathers.Model.extend('todos', {
	resource: '/api/todos'
}, {});

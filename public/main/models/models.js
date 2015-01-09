'use strict';

export var Database = can.Model.extend('Database', {
	resource: '/api/databases'
}, {});

export var Collection = can.Model.extend('Collection', {
	resource: '/api/collections'
}, {});

export var Doc = can.Model.extend('Doc', {
	resource: '/api/documents'
}, {});


export var Test = can.Feathers.Model.extend('Test', {
	resource: '/api/tests'
}, {});

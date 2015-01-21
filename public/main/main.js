'use strict';

import 'mustache-helpers';
import 'routes';

/* * * Fixtures * * */
// import 'fixtures/databases';
import 'fixtures/collections';
import 'fixtures/documents';

/* * * Components * * */
import 'components/page-home/page-home';
import 'components/page-server/page-server';
import 'components/page-database/page-database';
import 'components/page-collection/page-collection';
import 'components/servers-sidebar/servers-sidebar';
import 'components/server-status/server-status';
import 'components/query-builder/query-builder';
import 'components/code-editor/code-editor';
import 'components/add-server/add-server';

// import 'components/task-module/task-module';
// import 'components/todo-module/todo-module';

import {Server} from 'models/models';

var socket = io('', {transports: ['websocket']});
can.Feathers.connect(socket);


/* * * Main Application State * * */
import appState from 'appState';

$(document.body).append( can.view('main/site.stache', appState) );



Server.findAll({}).done( function(servers){
	appState.attr('servers').replace(servers);

	// When the page changes, change the main content.
	appState.bind('page', function(ev, newVal){
	  if(newVal) {
	    var template =  '<page-'+newVal+'></page-'+newVal+'>';
	    $('#content').html(  can.stache( template )( appState ) );
	  }
	});

	Server.bind('created', function(ev, newVal){
		appState.attr('servers').push(newVal);
	});

	can.route.ready();
});

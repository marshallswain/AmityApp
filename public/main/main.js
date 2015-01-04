'use strict';

import 'mustache-helpers';
import 'routes';

/* * * Fixtures * * */
import 'fixtures/databases';
import 'fixtures/collections';
import 'fixtures/documents';

/* * * Components * * */
import 'components/page-server/page-server';
import 'components/page-database/page-database';
import 'components/page-collection/page-collection';
import 'components/server-status/server-status';
import 'components/query-builder/query-builder';
import 'components/code-editor/code-editor';

import {Database} from 'models/models';

/* * * Main Application State * * */
import appState from 'appState';

$(document.body).append( can.view('main/site.stache', appState) );

Database.findAll({}, function(dbs){
	appState.attr('databases').replace(dbs);

	// When the page changes, change the main content.
	appState.bind('page', function(ev, newVal){
	  if(newVal) {
	    var template =  '<page-'+newVal+'></page-'+newVal+'>';
	    $('#content').html(  can.stache( template )( appState ) );
	  }
	});

	can.route.ready();
});

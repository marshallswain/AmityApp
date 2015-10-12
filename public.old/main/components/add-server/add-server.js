'use strict';

import appState from '../../appState';
import {Server} from '../../models/models';
import {MongodbUriParser} from '../../../node_modules/mongodb-uri/mongodb-uri';

can.Component.extend({
	tag: 'add-server',
	template: can.view('/main/components/add-server/add-server.stache'),
	scope: {
		connectionString:'mongodb://localhost:27017/amity',
		saveServer:function(scope, el, ev){
			var parsed = MongodbUriParser.parse(this.attr('connectionString'));

			var server = new Server({
				connectionString: this.attr('connectionString'),
				hostname: parsed.hosts[0].host,
				type:'mongodb'
			});
			server.save(function(){
				console.log('saved');
			});
		}
	}
});
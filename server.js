'use strict';

var feathers = require('feathers'),
  mongo = require('mongoskin'),
	feathersMongo = require('feathers-mongodb'),
  bodyParser = require('body-parser'),
  app = feathers();
app.use(bodyParser.json());
app.use(feathers.static(__dirname + '/public'));

var AmityMongoDB = require('amity-mongodb'),
  config = require('./config');

var connectionString = 'mongodb://localhost:27017/amity',
  ackOptions = {w: 1, journal: false, fsync: false, safe: false };
var db = mongo.db(connectionString, ackOptions);

var amityConfig = {
	'store':{
		'servers':feathersMongo({db:db, collection:'servers'}),
		'users':feathersMongo({db:db, collection:'users'})
	}
};
var amity = require('amity')(amityConfig, app);
// amity.register(new AmityMongoDB('host', config, app));

// Start the server.
app.listen(config.site.port, function() {
  console.log('Feathers server listening on port ' + config.site.port);
});

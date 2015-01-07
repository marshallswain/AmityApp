'use strict';

var feathers = require('feathers'),
  mongo = require('mongoskin'),
	feathersMongo = require('feathers-mongodb'),
  bodyParser = require('body-parser'),
  app = feathers();
app.use(bodyParser.json());
app.use(feathers.static(__dirname + '/public'));

// Set up Amity Config Storage Services
var db = mongo.db('mongodb://localhost:27017/amity'),
  serverStore = feathersMongo({db:db, collection:'servers'}),
  userStore = feathersMongo({db:db, collection:'users'});

// Start Amity, setup stores.
var amity = require('amity')(app);
amity.setServerStore(serverStore);
amity.setUserStore(userStore);

// Start the server.
var port = 8081;
app.listen(port, function() {
  console.log('Feathers server listening on port ' + port);
});

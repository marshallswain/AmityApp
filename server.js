'use strict';

var feathers = require('feathers'),
  amity = require('amity'),
  bodyParser = require('body-parser');

// Prep the Feathers server.
var app = feathers()
  .use(feathers.static(__dirname + '/public'))
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({extended: true}))
  .configure(feathers.socketio())
  .configure(feathers.rest());

var config = {
  apiPrefix:'/api'
};
// Start Amity with a MongoAdapter as a configuration store.
amity.start(app, config, new amity.adapters.MongoDB('mongodb://localhost:27017'));

// Start the server.
var port = 8081;
app.listen(port, function() {
  // app.use('/api/tasks', require('./services/tasks'));
  console.log('Feathers server listening on port ' + port);
});

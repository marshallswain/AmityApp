'use strict';

var feathers = require('feathers'),
  amity = require('amity'),
  mongoose = require('mongoose'),
  feathersMongo = require('feathers-mongodb'),
  bodyParser = require('body-parser');

// Prep the Feathers server.
var app = feathers()
  .use(feathers.static(__dirname + '/public'))
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({extended: true}))
  .configure(feathers.socketio())
  .configure(feathers.rest());

mongoose.connect('mongodb://localhost:27017/amity');

var config = {
  apiPrefix:'/api'
};
// Start Amity with an adapter as a configuration store.
amity.start(app, config, amity.mongodb('mongodb://localhost:27017/amity'));

// app.use('/api/todos', require('./services/todos'));


// Start the server.
var port = 8081;
app.listen(port, function() {
  // app.use('/api/tasks', require('./services/tasks'));
  console.log('Feathers server listening on port ' + port);
});

'use strict';

var feathers = require('feathers'),
  mongo = require('mongoskin'),
  mongoose = require('mongoose'),
  feathersMongo = require('feathers-mongodb'),
  bodyParser = require('body-parser');

mongoose.connect('mongodb://localhost/feathers-example');

var app = feathers()
  .use(feathers.static(__dirname + '/public'))
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({extended: true}))
  .configure(feathers.socketio())
  .configure(feathers.rest());

// Set up Amity Config Storage Services
// var db = mongo.db('mongodb://localhost:27017/amity'),
//   serverStore = feathersMongo({db:db, collection:'servers'}),
//   userStore = feathersMongo({db:db, collection:'users'});

// Start Amity, setup stores.
// var amity = require('amity')(app);
// amity.setServerStore(serverStore);
// amity.setUserStore(userStore);



app.get('/addService', function(req, res, next){
  app.use('/api/tasks', require('./services/tasks'));
  res.json({
    result:'Tasks service added'
  });
});

// Start the server.
var port = 8081;
app.listen(port, function() {
  console.log('Feathers server listening on port ' + port);
});

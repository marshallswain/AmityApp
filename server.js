'use strict';

var feathers = require('feathers'),
  mongo = require('mongoskin'),
	feathersMongo = require('feathers-mongodb'),
  bodyParser = require('body-parser');

var app = feathers()
  .use(feathers.static(__dirname + '/public'))
  .use(bodyParser.json())
  .configure(feathers.socketio())
  .configure(feathers.rest());

// Set up Amity Config Storage Services
var db = mongo.db('mongodb://localhost:27017/amity'),
  serverStore = feathersMongo({db:db, collection:'servers'}),
  userStore = feathersMongo({db:db, collection:'users'});

// Start Amity, setup stores.
var amity = require('amity')(app);
amity.setServerStore(serverStore);
amity.setUserStore(userStore);

// mongoose.connect('mongodb://tuts:smarty!!!@candidate.32.mongolayer.com:10295,mongodb://tuts:smarty!!!candidate.33.mongolayer.com:10295/feathers-tuts');
app.get('/addService', function(req, res, next){
  app.use('/api/tests', feathersMongo({db:db, collection:'tests'}));
  res.json({
    result:'Tests service added'
  });
});

// Start the server.
var port = 8081;
app.listen(port, function() {
  console.log('Feathers server listening on port ' + port);
});

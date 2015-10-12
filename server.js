var feathers = require('feathers'),
  amity = require('amity'),
  bodyParser = require('body-parser'),
  ssr = require('can-ssr');

// Prep the Feathers server.
var app = feathers()
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({extended: true}))
  .configure(feathers.socketio())
  .configure(feathers.rest())
  .use(feathers.static(__dirname + '/public'));

var config = {
  apiPrefix:'/api'
};
// Start Amity with a MongoAdapter as a configuration store.
amity.start(app, config, amity.adapters.MongoDB('mongodb://localhost:27017'));

// Always load SSR last.
app.use('/', ssr({
  config: __dirname + '/public/package.json!npm',
  liveReload: true,
  liveReloadHost: 'Marshalls-iMac.local'
}))
.configure(feathers.errors());

// Start the server.
var port = 8081;
app.listen(port, function() {
  // app.use('/api/tasks', require('./services/tasks'));
  console.log('Feathers server listening on port ' + port);
});

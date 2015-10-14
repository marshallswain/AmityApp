var feathers = require('feathers');
var hooks = require('feathers-hooks');
var amity = require('amity');
var bodyParser = require('body-parser');
var ssr = require('can-ssr/middleware');
var feathersPassportJwt = require('feathers-passport-jwt');

// Prep the Feathers server.
var app = feathers()
  .disable('x-powered-by')
  .configure(hooks())
  .configure(feathers.rest())
  .configure(feathers.socketio())
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({extended: true}))
  .configure(feathersPassportJwt({
    secret: 'feathers-rocks'
  }))
  .use(feathers.static(__dirname + '/public'));

// Always load SSR last.
app.use('/', ssr({
  config: __dirname + '/public/package.json!npm',
  liveReload: true,
  liveReloadHost: 'Bitovi.local'
}))
.configure(feathers.errors());

var config = {
  apiPrefix:'/api'
};
// Start Amity with a MongoAdapter as a configuration store.
amity.start(app, config, amity.adapters.MongoDB('mongodb://localhost:27017'));

// Start the server.
var port = 8080;
app.listen(port, function() {
  // app.use('/api/tasks', require('./services/tasks'));
  console.log('Feathers server listening on port ' + port);
});

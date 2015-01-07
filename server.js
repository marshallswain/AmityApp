var feathers = require('feathers'),
  bodyParser = require('body-parser')
  app = feathers();
  app.use(bodyParser.json());
  app.use(feathers.static(__dirname + '/public'));


var amity = require('amity'),
  AmityMongoDB = require('amity-mongodb'),
  mConfig = require('./config');

var localMongo = new AmityMongoDB('host', config, app);
amity.register(localMongo);

// Start the server.
app.listen(config.site.port, function() {
  console.log('Feathers server listening on port ' + config.site.port);
});

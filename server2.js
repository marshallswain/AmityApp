'use strict';

'use strict';

var request = require('request'),
  assert = require('assert'),
  fixture = require('./node_modules/feathers/test/providers/service-fixture'),
  todoService = fixture.Service,
  verify = fixture.verify,
  feathers = require('feathers'),
  bodyParser = require('body-parser');

var data = { description: 'Do dishes!', id: 'dishes' };
var app = feathers();

app.use(function defaultContentTypeMiddleware (req, res, next) {
  req.headers['content-type'] = req.headers['content-type'] || 'application/json';
  next();
});

app.configure(feathers.rest())
.use(bodyParser.json())
.use('/todo', {
  create: function (data, params, callback) {
    callback(null, data);
  }
});

var server = app.listen(4775, function(){
  app.use('tasks', todoService);
  console.log('Server started')
});

request({
  method: 'POST',
  url: 'http://localhost:4775/todo',
  body: JSON.stringify(data)
}, function (error, response, body) {
  console.log(body);
  // assert.deepEqual(JSON.parse(body), data);
  server.close();
});
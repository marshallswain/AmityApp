var mongoose = require('mongoose'),
  ObjectId = mongoose.Schema.Types.ObjectId,
  MongooseService = require('feathers-mongoose-advanced');

// Set up the schema
var schema = new mongoose.Schema({
  description: String,
  done: Boolean,
  userID: ObjectId
});

// External access to the model.
var model = mongoose.model('Hey', schema);

// Provide access to the service.
module.exports = new MongooseService(model);
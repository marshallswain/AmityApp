module.exports = function() {


	var dbService = {
		find: function(params, callback) {
		  // Get the admin db.
		  var db = mongoServer.attr('admin');
		  db.listDatabases(function(err, dbs) {
		    if (err) {
		      //TODO: handle error
		      console.error(err);
		    }
		    // TODO: Filter dbs by white-list / black-list, 'local'
	      return callback(null, databases);
			});
		},

		create: function(data, params, callback) {
			console.log(data);
			callback(null, data);
		},

		update: function(id, data, params, callback) {
			console.log(data);
			callback(err, data);
		},

		remove: function(id, params, callback) {
			console.log(data);
			callback(err, data);
		},

		setup: function(app) {
			this.service = app.service.bind(app);
		}
	};

	return dbService;
};

var models = {};

export function getDbModel(resource){
	if (!models[resource]) {

		models[resource] = can.Feathers.Model.extend(resource, {
			resource:resource,
			id:'_id'
		}, {
			// Returns size of the db using the largest-sized unit.
			dbSize(){
				var bytes = this.attr('dataSize');
				if(bytes === 0){
					return '0 Byte';
				}
				var k = 1024;
				var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
				var i = Math.floor(Math.log(bytes) / Math.log(k));
				return (bytes / Math.pow(k, i)).toPrecision(3) + ' ' + sizes[i];
			}
		});

		// Extend the matching Model.List.
		models[resource].List = models[resource].List.extend({}, {
			init: function(){
				var self = this;

				// On 'created', sort new instances into the list.
				models[resource].bind('created', function(ev, instance){

					// Only push it to the list if it doesn't already exist.
					var found = false;
					for (var i = 0; i < self.length; i++) {
						// If the instance comes before the next...
						if (instance.name < self[i].name) {
							// Splice it in.
							self.splice(i, 0, instance);
							found = true;
							break;
						}
					}
					// If it didn't fit in the middle, push it onto the end.
					if (!found) {
						self.push(instance);
					}
				});

				// Immediately remove database from the model store when destroyed.
				models[resource].bind('destroyed', function(ev, instance){
					delete this.store[instance.id];
				});

			}
		});
	}
	return models[resource];
}
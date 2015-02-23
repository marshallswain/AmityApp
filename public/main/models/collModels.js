'use strict';

var models = {};

export function getCollModel(resource){
	if (!models[resource]) {

		// Create the Model.
		models[resource] = can.Feathers.Model.extend(resource, {
			resource:resource,
			id:'_id'
		}, {});

		// Extend the matching Model.List.
		models[resource].List = models[resource].List.extend({}, {
			init: function(){
				var self = this;

				// Sort new instances into the list.
				models[resource].bind('created', function(ev, instance){

					// Only push it to the list if it instance doesn't already exist.
					if (!this.store[instance.id]) {
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
					}
				});
			}
		});
	}
	return models[resource];
}
var attrs = {
	'client':null,
	'db':null,
	'admin':null
};

/**
 * attr Getter / Setter
 *
 * Get data by passing in an attrName.  Set data by passing in
 * the data as a second argument.
 *
 * @param  {String} attrName    Required attribute name.
 * @param  {[type]} data Used when setting data to an attrName.
 * @return Whatever data is stored in memory for the attrName.
 */
exports.attr = function(attrName, data){
	if (attrName) {
		if (data) {
			attrs[attrName] = data;
			return data;
		}
		return attrs[attrName];
	} else {
		new Error('Must pass in Param');
	}
}
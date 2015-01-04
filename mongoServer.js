var params = {
	'client':null,
	'db':null,
	'admin':null
};

exports.attr = function(param, variable){
	if (param) {
		if (variable) {
			params[param] = variable;
			return variable;
		}
		return params[param];
	} else {
		new Error('Must pass in Param');
	}
}
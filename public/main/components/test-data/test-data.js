'use strict';

import {Test} from '../../models/models';

can.Component.extend({
	tag: 'test-data',
	template: can.view('/main/components/test-data/test-data.stache'),
	scope: {
		tests:new Test.List({})
	}
});

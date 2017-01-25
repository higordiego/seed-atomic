'use strict'
import pass from '../_quarks/password'

function configPass (v) {
	return pass.hash(v);
}

module.exports = {
		type: String, required: true, set: configPass
}



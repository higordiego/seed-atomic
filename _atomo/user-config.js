'use strict'
import pass from '../_quarks/user-password'

function configPass (v) {
		return pass.hash(v);
	}
const object = {
	name: 	  {type: String, required: true},
	login: 	  {type: String, required: true, unique: true},
	email: 	  {type: String, required: true},
	password: {type: String, required: true, set: configPass},
	type: 	  {type: Number, default: 0},
	token: 	  {type: String }
}
module.exports = object

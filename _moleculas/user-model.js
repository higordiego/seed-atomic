'use strict'
const mongoose =  require('mongoose');
const Schema   = mongoose.Schema;

const name 					= require ('../_atomo/string-required')
const email 				= require ('../_atomo/string-required')
const login 				= require('../_atomo/string-required-unique')
const password 				=  require('../_atomo/string-password-crypt')
const token 				= require('../_atomo/string')
const status 				= require('../_atomo/boolean-default-true')
const created_at		    = require('../_atomo/date-default')
const updated_at 		    = require('../_atomo/date-default')
const deleted_at 		    = require('../_atomo/date-default')

const User = new Schema({
	name,
	login,
	password,
	email,
	token,
	created_at,
	updated_at,
	deleted_at
});

User.index({login: 1,status:1, email:1,token:1});

const molecule =  mongoose.model('Users', User);


module.exports = molecule

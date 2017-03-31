'use strict'
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var mongoosePaginate = require('mongoose-paginate');

const name = require('../_atoms/string-required')
const email = require('../_atoms/string-required')
const forgot = require('../_atoms/string')
const login = require('../_atoms/string-required-unique')
const password = require('../_atoms/string-password-crypt')
const token = require('../_atoms/string')
const status = require('../_atoms/boolean-default-true')
const created_at = require('../_atoms/date-default')
const updated_at = require('../_atoms/date-default')

const User = new Schema({
	name,
	login,
	password,
	email,
	token,
	forgot,
	status,
	created_at,
	updated_at
});

User.index({login: 1,status: 1,email: 1});

User.plugin(mongoosePaginate);

const molecule = mongoose.model('Users', User);

module.exports = molecule

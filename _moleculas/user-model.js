'use strict'
import mongoose, {Schema} from 'mongoose';


import name from '../_atomo/name'
import login from '../_atomo/login'
import password from '../_atomo/password'
import email from '../_atomo/email'
import type from '../_atomo/type'
import token from '../_atomo/token'

const User = new Schema({
	name,
	login,
	password,
	email,
	type,
	token
});

User.index({login: 1});

const molecule =  mongoose.model('Users', User);

console.log(molecule.schema)

module.exports = molecule



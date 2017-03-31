/*
	Crud business User
*/
const create = require('../../../_hadrons/bussiness-user/create')
const list 	= require('../../../_hadrons/bussiness-user/list')
const listOne = require('../../../_hadrons/bussiness-user/listOne')
const update = require('../../../_hadrons/bussiness-user/update')
const remove = require('../../../_hadrons/bussiness-user/remove')
const auth = require('../../../_hadrons/bussiness-user/auth')
const createDefault = require('../../../_hadrons/bussiness-user/default')
const userModel = require('../../../_molecules/user-model');
const validateRequest = require('../validate-user');
const forgot = require('../../../_hadrons/bussiness-user/forgot')
const validateForgot = require('../../../_hadrons/bussiness-user/validate-forgot')
const passwordUpdate = require('../../../_hadrons/bussiness-user/new-password') 


module.exports = (app) => {
	const url = '/api/user'

	// route login jwt
	app.route('/')
		.get((req, res) => res.json({msg: 'Bem vindo api seed-atomic', version: '0.0.1'}))
		.post(auth(app))

	// routes base (CRUD)
	app.route(url)
		.post(validateRequest.make, create(userModel))
		.get(list(userModel))

	app.route(url+ '/paginate/:start/:end')
		.get(list(userModel))

	app.route('/forgot/:email')
	   .get(forgot(userModel))

	app.route('/forgot/validate/:forgot')
       .get(validateForgot(userModel))

     app.route('/forgot/password')
     	.post(passwordUpdate(userModel))

	app.route(url + '/:id')
		.get(validateRequest.change, listOne(userModel))
		.put(validateRequest.change, update(userModel))
		.delete(validateRequest.delete, remove(userModel))

	// Default User login: 'higor' password '1234'
	app.route('/default')
		.get(createDefault(userModel))

	}

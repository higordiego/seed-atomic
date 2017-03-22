'use strict'
const create        = require( '../../../_organelles/organelle-create');
const list          = require( '../../../_organelles/organelle-find');
const update        = require( '../../../_organelles/organelle-update');
const remove        = require( '../../../_organelles/organelle-remove');
const validateUser  = require( '../../../_organelles/organelle-validate-login');
const defaultUser   = require( '../../../_organelles/organelle-user-default');
const userModel     = require( '../../../_molecules/user-model');
module.exports =  (app) => {

  const url = '/api/user'

  // route login jwt
  app.route('/')
  	 .get((req,res)=>res.json({msg: 'Bem vindo api seed-atomic',version: '0.0.1'}))
     .post(validateUser(app))
  
  // routes base (CRUD)
  app.route(url)
     .post(create(userModel))
     .get(list(userModel))
     .put(update(userModel))
     .delete(remove(userModel))


   // Default User login: 'higor' password '1234'
  app.route('/default')
  	 .get(defaultUser)

}
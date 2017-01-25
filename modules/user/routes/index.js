'use strict'
import create from '../../../_organelles/organelle-create';
import list from '../../../_organelles/organelle-find';
import update from '../../../_organelles/organelle-update';
import remove from '../../../_organelles/organelle-remove';
import validateUser from '../../../_organelles/organelle-validate-login';
import defaultUser from '../../../_organelles/organelle-user-default';
import userModel from '../../../_moleculas/user-model';
module.exports =  (app) => {

  const url = '/api/user'

  // route login jwt
  app.route('/')
  	 .get((req,res)=>res.json({msg: 'Bem vindo Api qTur',version: '0.0.1'}))
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
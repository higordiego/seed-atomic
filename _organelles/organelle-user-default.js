import User from '../_moleculas/user-model'

module.exports = (req,res)=>{
	let user = new User();
	user.name =  'higor',
	user.email = 'higor@gmail.com'
	user.login =  'higor'
	user.password =  '123'
	user.type =  0

	const success = require('./ribossomos/success-200-json')(res)
	const error = require('./ribossomos/error-json')(res)

	return User.create(user)
	.then(success)
	.catch(error)
}

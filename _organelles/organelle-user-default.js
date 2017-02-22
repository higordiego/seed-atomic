module.exports = (req,res)=>{
	const User =  require('../_moleculas/user-model')
	let user = new User();
	user.name =  'higor',
	user.email = 'higor@gmail.com'
	user.login =  'higor'
	user.password =  '1234'
	
	const success = require('./ribossomos/success-200-json')(res)
	const error = require('./ribossomos/error-json')(res)

	return User.create(user)
	.then(success)
	.catch(error)
}

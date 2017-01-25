'use strict'
import jwt  	from 'jsonwebtoken'
import pass		from '../_quarks/password'
module.exports = (app) => (req,res)=>{
	const User = require('../_moleculas/user-model')
	
	User.findOne({login: req.body.login},{token: 0})
	.exec()
	.then((user)=>{
		if (!user) {
			res.json({ success: false, message: 'Invalid login' });
		} else if (user) {
			console.log(user);
			if(pass.validate(user.password, req.body.senha)) {
				res.json({ success: false, message: 'Invalid password' });
			} else {
				var token = jwt.sign(user, app.get('superSecret'), {
					expiresIn : new Date().setHours(new Date().getHours() + 5)
				});	
				console.log(new Date(60*60*5 ))
				User.update({_id: user._id},{$set:{token: token}}).then((us)=>{
					res.json({
						success: true,
						message: 'Token Ativado',
						token: token
					});
				}).catch((err)=>{
					throw err;
				});

			};
		};
	})
	.catch((err)=> {throw err});
}
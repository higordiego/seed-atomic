module.exports = (app) => (req,res)=>{
	const jwt  	=  require('jsonwebtoken')
	const pass  =  require('../../_quarks/password')
	const User = require('../../_molecules/user-model')
	User.findOne({login: req.body.username},{token: 0})
	.exec()
	.then((user)=>{
		if (!user) {
			res.json({ success: false, message: 'Invalid login' });
		} else if (user) {
			if(!pass.validate(user.password, req.body.password)) {
				res.json({ success: false, message: 'Invalid password' });
			} else {
				var token = jwt.sign(user, app.get('superSecret'), {
					expiresIn : new Date().setHours(new Date().getHours() + 5)
				});	
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
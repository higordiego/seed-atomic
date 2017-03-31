const mongoose = require('mongoose')

const ctrl = {
		make: (req,res,next)=>{
			req.assert('name', 'valid name is required').notEmpty();
			req.assert('login', 'valid name is required').notEmpty();
			req.assert('email', 'valid email is required').isEmail();
			req.assert('password', '6 to 20 characters required').len(6, 20);
			const error = req.validationErrors();
			error ? res.json(error) :  next()	
		},
		change: (req,res,next)=>{
			mongoose.Types.ObjectId.isValid(req.params.id) ?  next() : res.json({_id: 'Invalid!'})
		},
		delete: (req,res,next)=>{
			mongoose.Types.ObjectId.isValid(req.params.id) ?  next() : res.json({_id: 'Invalid!'})
		}
	}

module.exports =  ctrl;

'use strict'
module.exports = (Organism) => 
(query, mod) => (res)=> {
	
	const success = require('./ribossomos/success-200-json')(res)
	const  error = require('./ribossomos/error-json')(res)
	const back = {returnNewDocument: true}
	
	return Organism.findOneAndUpdate(query, mod,back)
					.lean()
					.exec()
					.then(success)
					.catch(error)
}


'use strict'
module.exports = (Organism) => 
(mod) => (res)=> {
	const success = require('./ribossomos/success-200-json')(res)
	const error = require('./ribossomos/error-json')(res)
	
	Organism.create(mod)
			.then(success)
			.catch(error)
}


'use strict'
module.exports  = (Organism) => 
(query,select,paginate) => (res)=> {

	const success = require('./ribossomos/success-200-json')(res)
	const error = require('./ribossomos/error-json')(res)

	/*
		Config to plugin paginate mongoose
	*/

	const options = {
		select: select,
		leanWithId: false,
		lean: true,
		page: paginate.start, 
		limit: paginate.end
	}


	Organism.paginate(query,options)
    		.then(success)
    		.catch(error)
 }


module.exports  = (Organism) => 
(query,mod) => (res)=> {
	const success =   require('./ribossomos/success-200-json') (res)
	const error =  require('./ribossomos/error-json') (res)

	Organism.findOne(query,mod)
			.lean()
			.exec()
			.then(success)
			.catch(error)
		}


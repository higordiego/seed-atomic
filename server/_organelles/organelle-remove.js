'use strict'
module.exports = (Organism) => 
  (query) => (res)=> {
    const success = require('./ribossomos/success-200-json')(res)
    const error = require('./ribossomos/error-json')(res)
    
    	Organism.remove(query)
                .exec()
                .then(success)
                .catch(error)
  }


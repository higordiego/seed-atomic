'use strict'
module.exports  = (Organism) => 
  (req, res) => (res)=> {
    const query = {_id: req.params.id}
    import success  from './ribossomos/success-200-json' (res)
    import error  from'./ribossomos/error-json' (res)
    
    Organism.findById(query)
            .lean()
            .exec()
            .then(success)
            .catch(error)
  }


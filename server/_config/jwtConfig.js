module.exports = (express,app)=>{
  const jwt       = require('jsonwebtoken')
  const User      = require('../_molecules/user-model')
  const apiRoutes = express.Router(); 

  apiRoutes.use((req, res, next)=> {
      const token = req.headers['x-access-token'];
      if (token) {
       try {
        const decoded = jwt.decode(token, app.get('superSecret'));

        if (decoded.exp <= Date.now() &&  req._doc && decoded ) {
          res.status(400).json({error: 'Access Expired, please sign in again'});
        }
        User.findOne({token: token})
            .lean()
            .exec()
            .then((user)=>{
              if(user){
                req.user = user;
                return next();  
              }else{
                res.status(500).json({message: "Error fetching token User."})    
              }
            })
            .catch((err)=>{
             res.status(500).json({message: "Error fetching token User."})    
           })

      } catch (err) {
       res.status(401).json({message: 'Error: Your token is invalid'});
     }
   } else {
    res.status(401).json({message: 'Error: Authentication not found'})
  }
});
  return apiRoutes;
}



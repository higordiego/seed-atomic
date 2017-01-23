'use strict'
import jwt       from 'jsonwebtoken'
import User      from '../_moleculas/user-model'
module.exports = (express,app)=>{
  const apiRoutes = express.Router(); 

  apiRoutes.use((req, res, next)=> {
    const token = req.headers['x-access-token'];
    if (token) {
     try {
      const decoded = jwt.decode(token, app.get('superSecret'));
      if (decoded.exp <= Date.now()) {

        res.status(400).json({error: 'Access Expired, please sign in again'});
      }
      User.findOne({token: decoded.token }, function(err, user) {
        if(err)
          res.status(500).json({message: "Error fetching token user."})
        req.user = user;
        return next();
      });

    } catch (err) {
       res.status(401).json({message: 'Error: Your token is invalid'});
    }
  } else {
    res.status(401).json({message: 'Error: Authentication not found'})
  }
});
  return apiRoutes;
}



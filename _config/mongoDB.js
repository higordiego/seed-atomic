'use strict'
import mongoose from 'mongoose'

const online = true;
const url =  online ? '' : 'mongodb://localhost/seed-atomic';

  mongoose.Promise = require('bluebird')

  mongoose.connect(url)


  .then(() =>{
   mongoose.connection.on('error', err =>{
    console.log(`mongoose connection: `+err)
  })

   console.log(`Mongodb conectado : )`)


 })
  .catch(err => {
    console.log(`rejected promise ${err}`)
    mongoose.disconnect()      


  })

  process.on('SIGINT', ()=> {
    mongoose.connection.close(()=> {
      console.log('Mongodb: bye : )');
      process.exit(0);
    });
  });


export default mongoose;
  

const mongoose = require('mongoose')

const online = false;
const url =  online ? '' : 'mongodb://localhost/seed-atomic';

const options = { 
	db: { native_parser: true },
	server: { "auto_reconnect": true, "poolSize": 5, "socketOptions": { "keepAlive": 60 } }
}


mongoose.Promise = require('bluebird')

mongoose.connect(url,options)
		.then(() =>{
			console.log('Mongodb Connected : )')
			mongoose.connection.on('error', err =>{
				console.log(`mongoose connection: `+err)
			})
			mongoose.connection.on('reconnected', ()=> {
				console.log('Reconnected to MongoDB');
			});
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


module.exports = mongoose;


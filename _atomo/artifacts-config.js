'use strict'

const object = {
	name: 	  	  {type: String, required: true},
	recording: 	  {type: String, required: true},
	geolocation: {
		type: [Number], 
		index: '2d'     
	},
	description: {type: String, required: true},
	picture: 	 {type: String, required: true},
	qrCode: 	 {type: String, required: true},
	create_at: 	 {type: Date, default: new Date()}

}
module.exports = object

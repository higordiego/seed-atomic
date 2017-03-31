(function(){
	'use strict'
	var online = false;
	app.constant('Config', {
		api: online ? '' :'http://localhost:3000/api/',
		user: online ? '' : 'http://localhost:3000/'
	})
})()
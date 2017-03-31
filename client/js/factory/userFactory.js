(function(){
	'use strict'  
	app.factory('UserFactory', ['$http','Config', 
		function($http, Config){
			return {
				forgot: function(user){
					return $http.get(Config.user + 'forgot/' + user.email)
				},
				validateToken: function(forgot){
					return $http.get(Config.user + 'forgot/validate/'+ forgot)
				},
				passwordNew: function(user){
					return $http.post(Config.user + 'forgot/password', user)
				}
			};
		}]);
})();

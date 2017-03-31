(function(){
	'use strict'  
	app.factory('PainelFactory', ['$http','Config', 
		function($http, Config){
			return {
				navBar: function(user){
					return $http.get(Config.api + 'painel/'+ user._id)
				}
			};
		}]);
})();

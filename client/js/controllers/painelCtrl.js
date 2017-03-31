(function(){
	'use strict'
	app.controller('PainelCtrl', ['$scope','AuthService','$location'
		, function ($scope,AuthService,$location) {
		$scope.logout = function(){
			AuthService.logout();
			$location.path('/');
		}
	}])
})();
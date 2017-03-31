(function(){
	'use strict'
	app.controller('UserCtrl', ['$scope','$state','Flash', 'AuthService', 'UserFactory',
		'$stateParams', '$location'
		,function($scope,$state,Flash,AuthService,UserFactory,$stateParams,$location){
			$scope.error = {};
			$scope.user = {};
			


			$scope.initForm = function(){
				Flash.clear()
				$state.go('login.formLogin')	
				$scope.validate = false
			}


			$scope.validateToken = function(){
				$scope.validateNew = false;
				if(!$stateParams.id) $location.path('#!/')
					UserFactory.validateToken($stateParams.id).then(function(response){
						if(!response.data){
							$location.path('#/')
						}
						$scope.user = response.data
					})
			}


			$scope.newPassword = function(user){
				if(user.password1.length >= 6 && user.password2.length >= 6){
					Flash.clear()
					if(user.password1 == user.password2){
						user._id = $scope.user._id
						user.forgot = $scope.user.forgot
						$scope.validateNew = false;
						UserFactory.passwordNew(user).then(function(response){
							$scope.validateNew = true;
							$scope.msg = 'Password update ;)'
							Flash.create('primary', $scope.msg);
							delete $scope.user	
							setTimeout(function() {
								$scope.initForm();
							}, 4000);
						})
					}else{
						Flash.clear()
						$scope.validateNew = true;
							$scope.class = 'alert alert-danger no-border'
							$scope.msg = 'Passwords must be the same '
							Flash.create('danger', $scope.msg);
							delete $scope.user	
					}
				}else{
					Flash.clear()
					$scope.validateNew = true;
					$scope.msg = 'Password contains at least 6 digits'
					Flash.create('danger', $scope.msg);
					delete $scope.user
				}
			}

			$scope.login = function(usuario){
				AuthService.signin(usuario).then(function(response){
					Flash.clear();
					if(!response.data.success){
						$scope.error = response.data;
						Flash.create('danger', $scope.error.message);
						delete $scope.user
						delete $scope.error;
					}else{
						AuthService.setToken(response.data.token);
						$state.go('painel')
					}
				}, function(err){

				});
			};
			$scope.forgot = function(user){
				UserFactory.forgot(user).then(function(response){
					Flash.clear();
					if(response.data.msg){
						$scope.msg = 'Send you instructions in email'
						Flash.create('primary', $scope.msg);
						delete $scope.user
						setTimeout(function() {
							$state.go('login.formLogin')
							$scope.validate = false
							Flash.clear()
						}, 3000);
					}else{
						Flash.clear();
						$scope.msg = 'Email not found'
						Flash.create('danger', $scope.msg);
						delete $scope.user
					}
				})
			}
		}]);
})();
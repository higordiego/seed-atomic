(function(){
  'use strict'
  app.factory('authInterceptor', ['$q','$location','$localStorage', function ($q, $location,$localStorage) {

    return {
      request: function (config) {
        // Validando url externa...
        var pos = config.url.lastIndexOf("https://");
        var recebe = config.url.lastIndexOf('upload');
        if(recebe > 1){
         config.headers['Content-Type']= undefined;
         config.headers['x-access-token'] = $localStorage.token;
       } else if(pos == 0 ){
        config.headers = config.headers || {};
      }else{
        config.headers = config.headers || {};
        config.headers['x-access-token'] = $localStorage.token;
      }
      return config;
    },
    responseError: function(response) {
      if (response.status === 401 || response.status === 403) {
        $location.path('#/');
      }
      return $q.reject(response);
    }
  };
}])

  app.config(function ($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
})();










(function(){
    'use strict'
    app.run(function ($rootScope, $location, AuthService) {
        $rootScope.$on('$routeChangeStart', function (event, next, current) {
            if (next.authorize) {
                if (!AuthService.getToken()) {
                // event.preventDefault();
                // $location.path('/');
                $rootScope.$evalAsync(function () {
                    $location.path('/');
                })
            }
        }
    });
    });
})();
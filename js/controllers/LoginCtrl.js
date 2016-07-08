angular.module('App',['facebook']).config(
    ['FacebookProvider', function(FacebookProvider){
        var myAppId='1746903815593556';
        FacebookProvider.init(myAppId);
}])
    .controller('LoginCtrl', ['$rootScope','$timeout','Facebook',
     function($rootScope, $timeout, Facebook){
        $rootScope.user = {};
        $rootScope.authenticated=false;
        $rootScope.statusMessage='';
        $scope.$watch(
            function(){
                return Facebook.isReady();
            },
            function(newVal){
                if (newVal)
                    $scope.facebookReady=true;
            }
        );
        $rootScope.login = function(){
            Facebook.login(function(response) {
                if (response.status == 'connected') {
                    $rootScope.authenticated = true;
                    Facebook.api('/me', function(response) {
                        $Scope.$apply(function() {
                            $rootScope.user = response;
                            console.log($rootScope.user);
                            $rootScope.statusMessage='Welcome, '+$rootScope.user.name;
                        });
                    });
                }

            });
        };
        $rootScope.logout = function() {
            Facebook.logout(function() {
                $rootScope.$apply(function() {
                    $rootScope.user   = {};
                    $rootScope.statusMessage='';
                    $rootScope.authenticated = false;
                });
            });
        };
        $rootScope.getUserName = function(){
            return $rootScope.user.name;
        };
        $rootScope.getAuthenticated = function(){
            return $rootScope.authenticated;
        };
}]);

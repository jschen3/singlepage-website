angular.module('LoginFactory',['facebook']).config(
    ['FacebookProvider', function(FacebookProvider){
        var myAppId='1746903815593556';
        FacebookProvider.init(myAppId);
}])
    .factory('LoginFactory', ['$scope','$timeout','Facebook',
     function($scope, $timeout, Facebook){
        loginFactory= {};
        $scope.user = {};
        $scope.authenticated=false;
        $scope.statusMessage='';
        $scope.$watch(
            function(){
                return Facebook.isReady();
            },
            function(newVal){
                if (newVal)
                    $scope.facebookReady=true;
            }
        );
        loginFactory.login = function(){
            Facebook.login(function(response) {
                if (response.status == 'connected') {
                    $scope.authenticated = true;
                    Facebook.api('/me', function(response) {
                        $scope.$apply(function() {
                            $scope.user = response;
                            console.log($scope.user);
                            $scope.statusMessage='Welcome, '+$scope.user.name;
                            document.getElementById('status').innerHTML = 'Welcome, '+$scope.user.name;;
                        });
                    });
                }
        
            });
        };
        loginFactory.logout = function() {
            Facebook.logout(function() {
                $scope.$apply(function() {
                    $scope.user   = {};
                    $scope.statusMessage='';
                    $scope.authenticated = false;  
                });
            });
        };
        loginFactory.getUserName = function(){
            return $scope.user.name;
        }
        loginFactory.getAuthenticated = function(){
            return $scope.authenticated;
        }
        return loginFactory;
}]);
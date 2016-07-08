angular.module('LoginCtrl',['facebook']).config(
    ['FacebookProvider', function(FacebookProvider){
        var myAppId='1746903815593556';
        FacebookProvider.init(myAppId);
}])
    .controller('LoginCtrl', ['$scope','$timeout','Facebook',
     function($scope, $timeout, Facebook){
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
        $scope.login = function(){
            Facebook.login(function(response) {
                if (response.status == 'connected') {
                    $scope.authenticated = true;
                    Facebook.api('/me', function(response) {
                        $scope.$apply(function() {
                            $scope.user = response;
                            console.log($scope.user);
                            $scope.statusMessage='Welcome, '+$scope.user.name;
                        });
                    });
                }

            });
        };
        $scope.logout = function() {
            Facebook.logout(function() {
                $scope.$apply(function() {
                    $scope.user   = {};
                    $scope.statusMessage='';
                    $scope.authenticated = false;
                });
            });
        };
        $scope.getUserName = function(){
            return $scope.user.name;
        };
        $scope.getAuthenticated = function(){
            return $scope.authenticated;
        };
}]);

var app=angular.module('App',
	['ngRoute',
	 'NavBarCtrl', 
	 'CarouselCtrl',
	 'ArticleListCtrl', 
	 'ArticleCtrl',
	 'ProjectCtrl',
	 'facebook'
	 ]);
app.config(['$routeProvider', function($routeProvider, $http){
	$routeProvider.when('/', {
		templateUrl : 'main.html'
	}).
	when('/articles/:param', {
		templateUrl : 'article.html'
	}).
	when('/resume',{
		templateUrl : 'resume.html'
	}).
	when('/projects',{
		templateUrl : 'projects.html'
	}).
	when('/aboutme',{
		templateUrl : 'aboutme.html'
	}).
	otherwise({
    	redirectTo: '/'
  	});
}]);
app.config(['FacebookProvider', function(FacebookProvider){
	var myAppId='1746903815593556';
    FacebookProvider.init(myAppId);
}]).controller('FacebookCtrl', ['$scope', '$rootScope', '$timeout', 'Facebook', '$location',
	function($scope, $rootScope, $timeout, Facebook, $location){
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
        $scope.styles=[];
		for(i=0;i<5;i++){
			$scope.styles[i]="";
		}
		$scope.styles[0]="selected";
		$scope.menuClicked = function(linkClicked){
			for(i=0;i<5;i++){
				$scope.styles[i]="";
			}
			$scope.styles[linkClicked]="selected";
			switch(linkClicked){
				case "0":
					$location.path('/');
					break;
				case "1":
					$location.path('/resume');
					break;
				case "2":
					$location.path('/projects');
					break;
				case "3":
					$location.path('/teasers');
					break;
				case "4":
					$location.path('/aboutme');
					break;
				default:
					$location.path('/');
					break;
			}
		};
	}]);
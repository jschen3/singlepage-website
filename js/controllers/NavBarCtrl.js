angular.module('NavBarCtrl',['ngRoute','LoginFactory']).controller('NavBarCtrl',['$scope', '$location','LoginFactory',
	function(loginFactory, $location, $scope){
	$scope.authenticated=loginFactory.getAuthenticated();
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
	}
	$scope.login = function(){
		loginFactory.login();
		$scope.authenticated=loginFactory.getAuthenticated();
	}
	$scope.logout = function(){
		loginFactory.login();
		$scope.authenticated=loginFactory.getAuthenticated();
	}	
}]);
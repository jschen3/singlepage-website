angular.module('NavBarCtrl',['ngRoute'])
	.controller('NavBarCtrl',['$location','$scope',
		function($location, $scope){
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

var app=angular.module('TeaserCtrl', ['ngRoute','Constants']);
app.controller('TeaserCtrl',['$scope','$http','$route','TeaserFactory',
 	function($scope,$http,$routeParams, teaserFactory){
 		$scope.id=$routeParams.current.params.param;
 		console.log($scope.id);
		$scope.showSolution=false;
		$scope.buttonText="Show Solution"
		$scope.toggleSolution=function(){
			Prism.highlightAll();
			if ($scope.showSolution===false){
				$scope.buttonText="Hide Solution"
				$scope.showSolution=true;
			}
			else{
				$scope.buttonText="Show Solution";
				$scope.showSolution=false;
			}
		}
		teaserFactory.getTeaser($scope.id).then(function(response){
			$scope.teaser=response;
			console.log($scope.teaser);
			Prism.highlightAll();
		});
		
		$scope.checkType = function(type, templateType){
			if (type===templateType)
				return true;
			else{
				return false;
			}
		}
}]);


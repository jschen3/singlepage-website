angular.module('ProjectCtrl', ['Constants'])
	.controller("ProjectCtrl", ['$scope', '$http', 'ProjectFactory','IMAGE_URL',
		 function($scope, $http, projectFactory, imageUrl){
			projectFactory.getProjects().then(function(response){
			$scope.projects=response;
		});
		$scope.imageUrl=imageUrl;
	//projectFactory.getImageAppend().then(function(response){
	//	$scope.imageAppend=response;
	//});
}]);
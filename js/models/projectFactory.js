angular.module('projectapp').factory('projectFactory', ['$q', '$http', 'PROJECT_URL', 'IMAGE_URL',
	function($q, $http, projectUrl, imageUrl){
		var _projects;
		var _imageAppend;
		var projectFactory = {};
		projectFactory.getProjects = function(){
			var defer = $q.defer();
			$http.get(projectUrl).then(function(response){
				_projects = response.data;
				defer.resolve(_projects);
			});
			return defer.promise;
		}
		return projectFactory;
}]);
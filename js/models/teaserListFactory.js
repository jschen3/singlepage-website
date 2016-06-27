angular.module('teaserListApp').factory('teaserListFactory',['$q','$http','TEASER_URL', function($q, $http, teaserUrl){
	var _teaserList;
	var _teaser;
	var teaserListFactory={};
	teaserListFactory.getTeasers = function(){
		var defer=$q.defer();
		$http.get(teaserUrl).then(function(response){
			_teaserList=response.data;
			defer.resolve(_teaserList);
		});
		return defer.promise;
	}
	return teaserListFactory;
}]);
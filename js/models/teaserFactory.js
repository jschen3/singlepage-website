angular.module('teaserApp').factory('teaserFactory',['$q','$http','TEASER_URL',
 	function($q,$http,teaserUrl){
 		var _teaser;
 		var teaserFactory ={};
 		teaserFactory.getTeaser = function(id){
 			var defer=$q.defer();
 			$http.get(teaserUrl+'/'+id).then(function(response){
 				_teaser=response.data;
 				defer.resolve(_teaser);
 			});
 			return defer.promise;
 		}
 		return teaserFactory;
	}]);

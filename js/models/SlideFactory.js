/*
 * Factory to obtain slides
 */
angular.module('CarouselCtrl').factory('SlideFactory', ['$q', '$http', 'SLIDE_URL',
	function($q, $http, slideUrl){
		var _slides;
		var slideFactory={};
	/*
	 * Retrieves the slide list from http request
	 */
	slideFactory.getSlides = function(){
		var defer=$q.defer();
		$http.get(slideUrl).then(function(response){
			_slides=response.data;
			var m = _slides.length, t, i;
        	while (m) {
            	i = Math.floor(Math.random() * m--);
            	t = _slides[m];
            	_slides[m] = _slides[i];
            	_slides[i] = t;
        	}
			defer.resolve(_slides);
		});
		return defer.promise;
	}
	return slideFactory;
}]);
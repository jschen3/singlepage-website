angular.module('CarouselCtrl', ['ngAnimate','ui.bootstrap', 'Constants']).controller('CarouselCtrl',['$scope', 'SlideFactory',
	function($scope, slideFactory){
		slideFactory.getSlides().then(function(response){
        	$scope.slides=response;
    	});
	}]);
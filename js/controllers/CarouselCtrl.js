angular.module('CarouselCtrl', ['ngAnimate','ngTouch','ui.bootstrap', 'Constants']).controller('CarouselCtrl',['$scope', 'SlideFactory',
	function($scope, slideFactory){
		
		slideFactory.getSlides().then(function(response){
        	$scope.slides=response;
        	console.log($scope.slides);
        	
    	});
	}]);
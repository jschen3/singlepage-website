angular.module('CarouselCtrl', ['ngAnimate','ngTouch','ui.bootstrap', 'Constants']).controller('CarouselCtrl',['$scope', 'SlideFactory', '$timeout','$animate',
	function($scope, slideFactory, $timeout, $animate){
		
		slideFactory.getSlides().then(function(response){
        	$scope.slides=response;
        	console.log($scope.slides);
        	
    	});
	}]);
var app=angular.module('App',['ngRoute', 'NavBarCtrl', 'CarouselCtrl','ArticleListCtrl', 'ArticleCtrl']);
app.config(['$routeProvider', function($routeProvider, $http){
	$routeProvider.when('/', {
		templateUrl : 'main.html'
	}).
	when('/articles/:param', {
		templateUrl : 'article.html',
		controller:'ArticleCtrl'
	}).
	otherwise({
    	redirectTo: '/'
  	});
}]);

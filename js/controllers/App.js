var app=angular.module('App',['ngRoute','CarouselCtrl', 'NavBarCtrl','ArticleListCtrl', 'ArticleCtrl']);
app.config(['$routeProvider', function($routeProvider, $http){
	$routeProvider.when('/', {
		templateUrl : 'main.html'
	}).
	when('/articles/:param', {
		templateUrl : 'article.html'
	});
}]);

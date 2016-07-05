var app=angular.module('App',
	['ngRoute',
	 'NavBarCtrl', 
	 'CarouselCtrl',
	 'ArticleListCtrl', 
	 'ArticleCtrl',
	 'ProjectCtrl']);
app.config(['$routeProvider', function($routeProvider, $http){
	$routeProvider.when('/', {
		templateUrl : 'main.html'
	}).
	when('/articles/:param', {
		templateUrl : 'article.html'
	}).
	when('/resume',{
		templateUrl : 'resume.html'
	}).
	when('/projects',{
		templateUrl : 'projects.html'
	}).
	when('/aboutme',{
		templateUrl : 'aboutme.html'
	}).
	otherwise({
    	redirectTo: '/'
  	});
}]);

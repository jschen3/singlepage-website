angular.module('ArticleCtrl', ['ngRoute'])
    .controller('ArticleCtrl', ['$scope','ArticleFactory', '$route', function ($scope, articleFactory, $routeParams) { 
    $scope.id=$routeParams.current.params.param;
    console.log($scope.id);
    /*
     * Retrieves the article information from the articleFactory. The id comes from the url
     * which is stored as the variable $scope.id, inthe above lines. 
     */
    articleFactory.getArticle($scope.id).then(function(response){
    	$scope.article=response;
        console.log($scope.article);
    });
    /*
     * Retrieves the image append from the $scope.id and articleFactory
     */
    articleFactory.getImageAppend($scope.id).then(function(response){
    	$scope.imageAppend=response;
    });
}]);

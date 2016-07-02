angular.module('ArticleListCtrl',[])
	.controller('ArticleListCtrl',['$scope','ArticleListFactory',
	 	function($scope, ArticleListFactory){
	ArticleListFactory.initStyleArray().then(function(response){
        $scope.styleArray=response;
        //console.log($scope.styleArray);
    });
    /*
     * Calls the articleFactory to retrieve the list of articles.
     */
    ArticleListFactory.getArticles().then(function(response){
        $scope.articles=response;
        console.log($scope.articles);
    });
    /*
     * Controls the articles displayed on the screen by the pagination controls. 
     */
    $scope.paginationSelected = function(num){
        ArticleListFactory.changePage(num);
        ArticleListFactory.getStyleArray();
        $scope.currentPage=ArticleListFactory.getCurrentPage();
    };
    /*
     * Just a UI element will update to make work later.
     */
    $scope.currentPage=ArticleListFactory.getCurrentPage();
    $scope.months=[{
        url: "",
        month:"January Articles"
    },
    {
        url: "",
        month: "February Articles"
    }];
}]);
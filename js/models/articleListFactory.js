/*
 * Factory to obtain the articleList and control the pagination section on the page as well. 
 */
angular.module('ArticleListCtrl').factory('ArticleListFactory', ['$q', '$http', 'ARTICLE_URL', function($q, $http, articleUrl){
	var _articles;
	var _styleArray;
	var _currentPage = 1;
	var articleListFactory={};
	/* 
	 * Retrieves the articles list using and http request.
	 */
	articleListFactory.getArticles = function(){
		var defer=$q.defer();
		$http.get(articleUrl).then(function(response){
			_articles=response.data;			
			defer.resolve(_articles);
		});
		return defer.promise;
	}
	/* 
	 * Inits and returns the styles array to control the pagination control.
	 */
	articleListFactory.initStyleArray = function(){
		var defer=$q.defer();
		$http.get(articleUrl).then(function(response){
			_articles=response.data;
			_paginationNumber=Math.ceil(_articles.length/3);
			_styleArray = new Array(_paginationNumber);
			for (i=0; i<_styleArray.length;i++){
        		_styleArray[i]="";
    		}
    		_styleArray[_currentPage-1]="active";
    		console.log(_styleArray);
			defer.resolve(_styleArray);
		});
		return defer.promise;
	}
	/*
	 * Returns the style array. 
	 */
	articleListFactory.getStyleArray = function(){
		return _styleArray;
	}
	/*
	 * Returns the currentPage the pagination number is at.
	 */
	articleListFactory.getCurrentPage = function(){
		return _currentPage;
	}
	/*
	 * Changes the current page. Also updates the style array so the right page is highlighted
	 */
	articleListFactory.changePage = function(num){
		if (num===-2){
			if ((_currentPage-1)<1)
				_currentPage=1;
			else
				_currentPage=_currentPage-1;
		}
		else if (num===-1){
			if ((_currentPage+1)>_paginationNumber)
				_currentPage=_paginationNumber;
			else
				_currentPage=_currentPage+1;
			
		}
		else{
			_currentPage=num;
		}
		for (i=0; i<_styleArray.length;i++){
        		_styleArray[i]="";
    		}
    		_styleArray[_currentPage-1]="active";				
	}
	return articleListFactory;
}]);

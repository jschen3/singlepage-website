/*
 * Factory to obtain articles. Also retrieves the image append to retrieve images in articles.
 */
angular.module('ArticleCtrl').factory('ArticleFactory',['$q', '$http', 'ARTICLE_URL','IMAGE_URL',
	 function($q, $http, articleUrl, imageUrl){
	 	var _article;
	 	var _imageAppend;
	 	var articleFactory= {};
	 	/* 
	 	 * Function that retrieves the article using http get request and the id. 
	 	 * @param id the id from the url. The id of the article you want to retrieve. 
	 	 */
	 	articleFactory.getArticle = function(id){
	 		var defer=$q.defer();
	 		$http.get(articleUrl+"/"+id).then(function(response){
	 			_article=response.data;
	 			defer.resolve(_article);
	 		});
	 		return defer.promise;
	 	}
	 	/*
	 	 * Function that retrieves the image append to pull images for the article. 
	 	 * @param id the id you want to retrieve and create the image append for.
	 	 */
	 	articleFactory.getImageAppend = function(id){
	 		var defer = $q.defer();
	 		$http.get(articleUrl+"/"+id).then(function(response){
	 			_article=response.data;
	 			if (_article.title===undefined)
	 				_imageAppend="";
	 			else
	 				_imageAppend=imageUrl+"/"+_article.locator+"/";
	 			defer.resolve(_imageAppend);
	 		});
	 		return defer.promise;
	 	}
	 	return articleFactory;
}]);
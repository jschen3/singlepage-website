angular.module('insertArticleApp',['ngFileUpload', 'Constants']).controller('insertArticleController',['$scope', 'Upload', '$timeout', 'IMAGE_URL',  function($scope, Upload, $timeout, imageUrl){
	$scope.article={
		title:"",
		blurb:"",
		components:[{
			"text":"",
			"index":0,
			"file": null,
			"code":""
		}]
	};
	$scope.moreContent = function(){
		var newComponent={
			"text":"",
			"index":$scope.article.components.length,
			"file": null,
			"code":""
		};
		$scope.article.components.push(newComponent);
		console.log($scope.article);
	}
	$scope.submitArticle = function(){
		console.log($scope.article);
	}
	$scope.uploadFiles = function(file, errFiles) {
        $scope.f = file;
        $scope.errFile = errFiles && errFiles[0];
        if (file) {
            file.upload = Upload.upload({
                url: imageUrl,
                data: {file: file},
                fields:{'title':$scope.article.title}
            });

            file.upload.then(function (response) {
                $timeout(function () {
                    file.result = response.data;
                });
            }, function (response) {
                if (response.status > 0)
                    $scope.errorMsg = response.status + ': ' + response.data;
            });
        }   
    }
}]);

angular.module('commentCtrl').factory('commentFactory', ['$q','$http',
    function($q,$http){
        var commentUrl="http://localhost:8080/comments"
        var _comments;
        var _styleArray;
        var _currentPage = 1;
        var commentFactory = {};
        commentFactory.getComments = function(id){
            var defer=$q.defer();
            $http.get(commentUrl+"/"+id).then(function(response){
                _comments=response.data;
                defer.resolve(_comments);
            });
            return defer.promise;
        };
        commentFactory.addComments = function(comment, id){
                var defer=$q.defer();
                $http.post(commentUrl+"/"+id, comment).then(function(){
                    defer.resolve();
                });
                return defer.promise;
        };
        commentFactory.initStylesArray = function(id){
            var defer=$q.defer();
            $http.get(commentUrl+"/"+id).then(function(response){
                _comments=response.data;
                _paginationNumber=Math.ceil(_comments.length/5);
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
        commentFactory.getStyleArray = function(){
            return _styleArray;
        }
        commentFactory.getCurrentPage = function(){
            return _currentPage;
        }
        commentFactory.changePage = function(num){
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
        return commentFactory;
}]);

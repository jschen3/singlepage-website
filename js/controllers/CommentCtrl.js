angular.module('CommentCtrl',['ngRoute'])
  .controller('CommentCtrl',['$rootScope','$scope', '$route', 'CommentFactory',
  function($rootScope, $scope, $routeParams, commentFactory){
    	$scope.id=$routeParams.current.params.param;
      commentFactory.initStylesArray($scope.id).then(function(response){
    		$scope.styleArray=response;
    	});
    	commentFactory.getComments($scope.id).then(function(response){
    		$scope.comments=response;
    		console.log($scope.comments);
    	});
    	$scope.paginationSelected=function(num){
    		commentFactory.changePage(num);
    		commentFactory.getStyleArray();
    		$scope.currentPage=commentFactory.getCurrentPage();
    	}
    	$scope.currentPage=commentFactory.getCurrentPage();
      $scope.post = function(){
          var comment={};
          comment.author=$rootScope.user.name;
          comment.dateString=getDate();
          comment.elementId=$scope.id;
          comment.text=$scope.text;
          console.log("author:"+comment.author);
          console.log("elementId:"+comment.elementId);
          console.log("dateString:"+comment.dateString);
          console.log("text:"+comment.text);
          commentFactory.addComments(comment,comment.elementId).then(function(){
              commentFactory.getComments($scope.id).then(function(response){
  	                $scope.comments=response;
  	                console.log($scope.comments);
            	});
          });
          $scope.text='';
        

    }
      $scope.cancel = function(){
          this.text='';
          $scope.text='';
      }
      function getDate(){
      	var today = new Date();
  		var dd = today.getDate();
  		var mm = today.getMonth()+1; //January is 0!
  		var yyyy = today.getFullYear();

  		if(dd<10) {
      		dd='0'+dd
  		}
  		if(mm<10) {
      		mm='0'+mm
  		}
  		return today = mm+' '+dd+' '+yyyy;
  	}
  }]);

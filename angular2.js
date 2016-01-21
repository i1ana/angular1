angular.module('pink', [])

angular.module('pink')
	.controller('bacon', [$scope, function($scope){
		
		// $scope.mouseOver= function(){
		// 	$scope.mouseOver=

		$scope.exclaimation = !$scope.exclaimation		
	}


	$scope.exclaimation= false 

	$scope.link = function(){
		prompt("Do you want to click this link?")
		if("cancel"){
			
		}
	}

	}])


angular.module('pink', [])
	.controller('bacon', ['$scope', function($scope){
		
		$scope.switch = false

		$scope.mouseEnter = function(){
			$scope.switch = true

		// $scope.exclaimation = !$scope.exclaimation	

		$scope.mouseLeave = function(){
			$scope.switch = false
		}	
	}


	// $scope.exclaimation= false 

	// $scope.link = function(){
	// 	var input = prompt("Do you want to click this link?")
	// 	if(input === true){
	// 		$scope.hideLink ==
	// 	}

	}])


angular.module('button', [])
	.controller( 'bigButton' [$scope, function($scope){

		$scope.switch = false

		$scope.picture = function(){
			$scope.switch = true 
		}

		$scope.popUp = function() {


		}

	})]
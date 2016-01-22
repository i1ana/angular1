angular.module('pink', [])
	.controller('bacon', ['$scope', function($scope){
		
		$scope.switch = false
		$scope.punctuation = "."
		$scope.nope = true;

		$scope.mouseEnter = function(){
			$scope.switch = true
			$scope.punctuation = "!!!!"
		}

		$scope.mouseLeave = function(){
			$scope.switch = false
		}	
	
		$scope.exclaimation = function() {
			$scope.punctuation = "!!!!"
		}

		$scope.hideLink = function(event){
			var input = confirm("Do you want to click this link?")
		 	if(input === false){
		 		// if( !confirm("Do you want to click this link?")){
				$scope.nope = false;
				event.preventDefault()
				
			}
		}
	}])



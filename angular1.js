// --------Part 1--------------

angular.module('button', [])

angular
	.module('button')
 		.controller("buttonClick", ['$scope', function($scope){
 				$scope.clickMe = function(){
 					console.log("butts")
 					$scope.surprise = !$scope.surprise

 				}
 					$scope.surprise = false; 

 					$scope.listClick = function(){
 						$scope.hideTwo = !$scope.hideTwo
 					}
 							$scope.hideTwo = true; 

 	}])





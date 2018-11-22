(function () {
'use strict';

angular.module('lunchChecker', [])

.controller('checkerController', ['$scope', checkerFunction]);

function checkerFunction($scope) {
	
	$scope.itemList = "";
	$scope.message = "";
	
	$scope.checkIt = function(){
		var numItems = $scope.itemList.split(',').length;
		
		if(numItems > 3){
			// Too Much!
			$scope.message = "Too much!!";
		}else{
			// Enjoy!
			$scope.message = "Enjoy !!";
			
		}
	}

};

})();

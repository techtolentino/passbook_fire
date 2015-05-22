var billControllers = angular.module('billControllers', ['ngAnimate']);


billControllers.controller('ListController', ['$scope', '$http', function ($scope, $http){
	$http.get('js/bill-data.json').success(function(data){
		$scope.bills = data;
	});
}]);

billControllers.controller('DetailsController', ['$scope', '$http', '$routeParams', function ($scope, $http, $routeParams){
	$http.get('js/bill-data.json').success(function(data){
		$scope.bills = data;
		$scope.whichItem = $routeParams.itemId;

		$scope.date = new Date();

		// Previous Item Logic
		if ($routeParams.itemId > 0){
			$scope.prevItem = Number($routeParams.itemId)-1;
		} else {
			$scope.prevItem = $scope.bills.length-1;
		}
		// Next Item Logic
		if ($routeParams.itemId < $scope.bills.length-1){
			$scope.nextItem = Number($routeParams.itemId)+1;
		} else {
			$scope.nextItem = 0;
		}

	});
}]);
myApp.controller('DetailsController',
	function($scope, $firebase, $rootScope, $routeParams, $location, FIREBASE_URL){

	var whichBill = $routeParams.uId;
	var ref = new Firebase(FIREBASE_URL + 'bills/' + whichBill);
	var bill = $firebase(ref);

	$scope.bill = bill.$asObject();
	$scope.date = new Date();

});
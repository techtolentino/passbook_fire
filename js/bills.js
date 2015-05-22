myApp.controller('BillsController', function($scope, $routeParams,
	$firebase, $location, FIREBASE_URL){

	// var whichTeam = $routeParams.uId;
	var ref = new Firebase(FIREBASE_URL + 'bills/');
	var bills = $firebase(ref);

	$scope.bills = bills.$asObject();

});
var myApp = angular.module('myApp', ['ngRoute', 'appControllers', 'firebase'])
.constant('FIREBASE_URL', 'https://passbook.firebaseio.com/');

var appControllers = angular.module('appControllers',['firebase']);

myApp.config(['$routeProvider', function($routeProvider){
	$routeProvider.
	when('/bills', {
		templateUrl: 'partials/bills.html',
		controller: 'BillsController'
	}).
	when('/details/bills/:uId', {
		templateUrl: 'partials/details.html',
		controller: 'DetailsController'
	}).
	otherwise({
		redirectTo: '/bills'
	});
}]);

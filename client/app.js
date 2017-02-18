//server inits server.... app inits front end angular... client.js...
var myApp = angular.module('myApp', ['ngRoute']);
//var User = require('../models/User.js');

console.log('angular working...');

myApp.config(['$routeProvider', function($routeProvider) {
	$routeProvider.otherwise('/');
	$routeProvider
		.when('/epos/menu', {
			templateUrl: 'views/templates/menu.html',
			controller:'MenuCtrl'
		})
		.when('/epos/inventory', {
			templateUrl: 'views/templates/inventory.html',
			controller: 'InventoryCtrl'
		})
		.when('/epos/home', {
			templateUrl: 'views/templates/home.html',
			controller:'HomeCtrl'
		});
}]);

myApp.controller('HomeCtrl', ['$scope', '$http', '$location', function($scope, $http, $location){
	console.log('homectrl working...');
	$scope.user = {name:'test', password:'test'};
	$scope.authUser = function(usr) {
		console.log('');
		console.log('auth user working...');
		// $scope.user.name = usr.name;
		// $scope.user.password = usr.password;
		// console.log($scope.user);

		// $http.get('/api/drinks').then(successCallback, errorCallback);

		// function successCallback(res){
		//     //success code
		// 		console.log('success');
		// 		console.log(res.data);
		// 		$scope.user.name = res.data[0].name;
		// 		$scope.user.password = res.data[0].ingredients[0];
		// 		// $http.get('/'); //return URL to normal..is there a better way?
		// }
		// function errorCallback(error){
		//     //error code

		// $location.path('/epos/menu');
		}
	

	$scope.openInventory = function(){
		console.log('opened inventory');
		$location.path('/epos/inventory');
		
	}


	$scope.openMenu = function(){
		console.log('opened the menu...');
		$location.path('/epos/menu');
		$http.get('/api/drinks').then(successCallback, errorCallback);

		function successCallback(res){
		    //success code
				console.log(res.data[0].name);

				$scope.drinks = res.data;
				
				// $http.get('/'); //return URL to normal..is there a better way?
		}
		function errorCallback(error){
		    //error code
		}
	}


}]);

myApp.controller('LoginCtrl', ['$scope', '$http', function($scope, $http) {
	console.log('login ctrl working...');

	// $scope.login = function()
}]);

myApp.controller('DrinksCtrl', ['$scope', '$http', function($scope, $http){
	console.log('drinksctrl working...');
	$scope.name = 'Raymond';

	$scope.getDrinks = function() {
		console.log('got the drinks...');
	}
}]);

myApp.controller('MenuCtrl', ['$scope', '$http', function($scope, $http){
	console.log('MenuCtrl working...');
	$scope.name = 'Raymond';

}]);

myApp.controller('InventoryCtrl', ['$scope', '$http', function($scope, $http) {
	console.log('InventoryCtrl working...');


}]);
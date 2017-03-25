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
		.when('/epos/orders', {
			templateUrl: 'views/templates/orders.html',
			controller: 'OrdersCtrl'
		})
		.when('/epos/customers', {
			templateUrl: 'views/templates/customers.html',
			controller: 'CustomersCtrl'
		})
		.when('/epos/home', {
			templateUrl: 'views/templates/home.html',
			controller:'HomeCtrl'
		});
}]);

myApp.controller('SideNavCtrl', ['$scope', '$http', '$location', function($scope, $http, $location){
	console.log('SideNavCtrl working...');
	$scope.user = {name:'test', password:'test'};
	$scope.authUser = function(usr) {
		console.log('');
		console.log('auth user working...');

	}


	$scope.openInventory = function(){
		console.log('opened inventory');
		$location.path('/epos/inventory');

	}


	$scope.openMenu = function(){
		console.log('opened the menu...');
		$location.path('/epos/menu');
	}

	$scope.openOrders = function() {
		console.log('opened the active orders...');
		$location.path('/epos/orders');
	}

	$scope.openCustomers = function() {
		console.log('opened the customers directory..');
		$location.path('/epos/customers');
	}

	$scope.openHome = function() {
		console.log('opened the home/admin page');
		$location.path('/epos/home');

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

myApp.controller('MenuCtrl', ['$scope', '$http', '$routeParams', '$q', function($scope, $http, $routeParams, $q){
	console.log('MenuCtrl working...');
	$scope.menu = [];
	$scope.ingredients = [];
	$scope.cart = [];
	$scope.total = function(cart) {
		var total = 0;
		cart.forEach(function(n) {
			total = total + n.price;
		});
		return total;
	}
	// $http.get('/api/entrees').then(successCallback, errorCallback);
	// $http.get('/api/sides').then(successCallback, errorCallback);
	// $http.get('/api/drinks').then(successCallback, errorCallback);
	$http.get('/api/menu_items').then(successCallback, errorCallback);

	function successCallback(res){
	    //success code
			// console.log(res.data[0].name);

		// $scope.menu.push(res.data); array of arrays...better way...

		res.data.forEach(function(n){
			// console.log(n);
			$scope.menu.push(n);
		});

		// console.log($scope.menu);

			// $http.get('/'); //return URL to normal..is there a better way?
	}
	function errorCallback(error){
	    //error code
	    console.log('menu items didnt work...');
	}

	$scope.addToOrder = function(menu_item) {
		//check ingredients for current menu_item
		var ingredients = menu_item.ingredients;
		var invGood = false;
		// Object.watch(invGood);
		var promises = [];
		ingredients.forEach(function(n) {
			promises.push($http.get('/api/inventory/'+n));
		});
		$q.all(promises).then(function(results) {
			// console.log('callback arry worked...');
			console.log(results);
			// results[0].config;
			results.forEach(function(n) {
				console.log(n.data);
				if (n.data) {
						invGood = true;
				}
				else {
					invGood = false;
				}

				// console.log(invGood);

			});
			console.log(invGood);
			if (invGood) {
				// console.log('in if case...');
				// $http.post('/api/orders', menu_item).then(function() {
				// 	console.log('order created');
				// }, function(err){
				// 	console.log(err);
				// });
				//cant do this here...creates order for  1 item...

				$scope.cart.push(menu_item);
			}

		});

		console.log(invGood);
		// console.log('still in addToOrder fnc');
		if (invGood == true) {
			console.log('enough inv!!');
			$scope.cart.push(menu_item);
		}
		else {
			console.log('not enough inv');
		}

	}
	$scope.checkout = function(cart) {
		console.log('checkout pressed..');
	}
}]);

myApp.controller('InventoryCtrl', ['$scope', '$http', function($scope, $http) {
	console.log('InventoryCtrl working...');
	$scope.inventory = [];

	$http.get('/api/inventory')
		.then(function(res){
			$scope.inventory = res.data;
			console.log($scope.inventory);
		},function(err) {
			console.log(err);
	});

}]);

myApp.controller('OrdersCtrl', ['$scope', '$http', function($scope, $http){
	console.log('OrdersCtrl working..');
}]);
myApp.controller('CustomersCtrl', ['$scope', '$http', function($scope, $http){
	console.log('CustomersCtrl working..');
}]);
myApp.controller('HomeCtrl', ['$scope', '$http', function($scope, $http){
	console.log('HomeCtrl working...');
}]);


myApp.service('OrderService')

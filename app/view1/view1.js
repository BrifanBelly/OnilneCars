'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/cars', {
    templateUrl: 'view1/view1.html',
	controllerAs: "$ctrl",
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['$http',function View1Ctrl($http) {
      var self = this;
      self.orderProp = 'age';

      $http.get('cars/cars.json').then(function(response) {
        self.cars = response.data;
		
		
	self.states = ['Acura ILX','Mazda CX-9','Honda Accord','Infiniti QX30','BMW M3 Manual','Smart Fortwo','Porsche Cayman','Subaru BRZ','Toyota-Prius','Rolls-Royce'];

    });
    }]);
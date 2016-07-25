'use strict';

angular.module('myApp.view2', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/cars/:carId', {
    templateUrl: 'view2/view2.html',
	controllerAs: "$ctrl",
    controller: 'View2Ctrl'
  });
}])

.controller('View2Ctrl', ['$http', '$routeParams',function View2Ctrl($http,$routeParams) {
      var self = this;
	 // self.name = "benson";
	 
	 self.setImage = function setImage(imageUrl) {
      self.mainImageUrl = imageUrl;
    };
	  
     $http.get('cars/' + $routeParams.carId + '.json').then(function(response) {
          self.car = response.data;
		  self.setImage(self.car.images[0]);
        });
	
    }]);
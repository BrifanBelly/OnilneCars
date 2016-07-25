'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngAnimate',
  'ui.bootstrap',
  'ngRoute',
  'myApp.view1',
  'myApp.view2',
  'myApp.version',
  'myApp.home'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/home'});
  
  angular.module('myApp')
  .controller('navCtrl',['$location','$routeParams',function navCtrl($location,$routeParams){
	  var self = this;
	

	self.isActive = function(destination){
		 console.log("called");
        return destination === $location.path();
    }
  }]);
}]);

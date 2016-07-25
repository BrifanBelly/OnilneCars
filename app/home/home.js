angular.module('myApp.home', ['ngRoute'])
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/home', {
    templateUrl: 'home/home.html',
	controllerAs: "$ctrl",
    controller: 'CarouselCtrl'
  });
}])



.controller('CarouselCtrl', function ($scope) {
  $scope.myInterval = 5000;
  $scope.slides =[
  {
	  id: 1,
	  image: "http://blog.caranddriver.com/wp-content/uploads/2015/08/2016-Acura-ILX-A-Spec-122-876x535.jpg",
	  text: "2016 Acura ILX A-Spec",
      link: "#!/cars/Acura"	  
  },
  {
	  id: 2,
	  image: "http://blog.caranddriver.com/wp-content/uploads/2016/07/2016-Mazda-CX-9-Signature-AWD-101-876x535.jpg",
	  text: "2016 Mazda CX-9 AWD",
      link: "#!/cars/Mazda-CX-9"	 
  },
  {
	  id: 3,
	  image: "http://blog.caranddriver.com/wp-content/uploads/2016/07/2017-Honda-Accord-hybrid-201-876x535.jpg",
	  text: "2017 Honda Accord Hybrid",
      link: "#!/cars/Honda-Accord-Hybrid" 
  },
  {
	  id: 4,
	  image: "http://blog.caranddriver.com/wp-content/uploads/2016/07/2017-Infiniti-QX30-AWD-101-876x535.jpg",
	  text: "2017 Infiniti QX30 AWD",
      link: "#!/cars/Infiniti-QX30-AWD" 
  },
  {
	  id: 5,
	  image: "http://media.caranddriver.com/images/14q4/651561/2015-bmw-m3-photo-660748-s-986x603.jpg",
	  text: "2015 BMW M3 Manual",
      link: "#!/cars/BMW-M3-Manual"
  },
  {
	id: 6,
    image: "http://blog.caranddriver.com/wp-content/uploads/2016/07/2017-Brabus-Smart-ForTwo-1013-876x535.jpg",
    text:"2017 Smart Fortwo Brabus",
      link: "#!/cars/Smart-Fortwo-Brabus"	 
  },
  {
	id: 7,
    image: "http://blog.caranddriver.com/wp-content/uploads/2016/07/2017-Porsche-718-Cayman-101-876x537.jpg",
    text:"2017 Porsche 718 Cayman",
      link: "#!/cars/Porsche-Cayman"	 
  },
  {
	id: 8,
    image: "http://blog.caranddriver.com/wp-content/uploads/2016/07/2017-Subaru-BRZ-JDM-spec-1091-876x535.jpg",
    text:"2017 Subaru BRZ",
      link: "#!/cars/Subaru-BRZ"	 
  },
  {
	id: 9,
    text: "2017 Toyota Prius Prime Plug-In Hybrid",
    image:"http://blog.caranddriver.com/wp-content/uploads/2016/07/2017-Toyota-Prius-Prime-plug-in-hybrid-112-876x535.jpg",
      link: "#!/cars/Toyota-Prius"	 
  },
  {
	  id:10,
	  image: "http://blog.caranddriver.com/wp-content/uploads/2016/07/2016-Rolls-Royce-Dawn-201-876x535.jpg",
	  text: "2016 Rolls-Royce Dawn",
      link: "#!/cars/Rolls-Royce"
	  
  }
  
  
  
  ];
});
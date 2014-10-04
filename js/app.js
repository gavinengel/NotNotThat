
var NotNotApp = angular.module("NotNotApp", ['ngRoute', 'NotNotControllers', 'NotNotServices']);

  NotNotApp.config(function($routeProvider){

    $routeProvider
      .when('/',
      {
        controller: 'NotController',
        templateUrl: 'partials/subject.html'
        })
      .when('/isnot',
          {
            controller: 'NotNotController',
            templateUrl: 'partials/isnot.html'
          })
      .when('/truth',
          {
            controller: 'TruthController',
            templateUrl: 'partials/truth.html'
      })
      .otherwise({
        redirectTo: '/'
        });

    });




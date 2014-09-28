
var NotNotApp = angular.module("NotNotApp", ['ngRoute', 'NotNotControllers', 'NotNotServices']);

  NotNotApp.config(function($routeProvider){

    $routeProvider
      .when('/',
      {
        controller: 'NotNotController',
        templateUrl: 'partials/subject.html'
        })
      .when('/isnot',
          {
            controller: 'IsNotController',
            templateUrl: 'partials/isnot.html'
          })
      .otherwise({
        redirectTo: '/'
        });

    });
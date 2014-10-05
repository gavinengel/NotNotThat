
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



NotNotApp.directive('focusMe', function($timeout) {
  return {
    scope: { trigger: '@focusMe' },
    link: function(scope, element) {
      scope.$watch('trigger', function(value) {
        if(value === "true") { 
          $timeout(function() {
            element[0].focus(); 
          });
        }
      });
    }
  };
});
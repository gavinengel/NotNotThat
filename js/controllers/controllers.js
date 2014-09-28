
//controller collection
var NotNotControllers = angular.module('NotNotControllers', []);

    
  //main controller
  NotNotControllers.controller('NotNotController', function ($scope, storageService) {
    //clear the taskInput
    $scope.test = "blat";

    var notnots = $scope.notnots = storageService.get('notnot');

    // process the form
      $scope.processForm = function() {


        newsubject = $scope.subject.trim();
        newnot = $scope.thenot.trim();
        console.log("subject: " + newsubject + "; not: " + newnot);
        if (!subject.length) {
          console.log('no length');
        return;
      }

      notnots.push({
        subject: newsubject,
        not: newnot
      });
      //console.log('nn length:' + notnots.length + notnots[2].not);


      };
    });


  //main controller
  NotNotControllers.controller('IsNotController', function ($scope, storageService) {
    //clear the taskInput
    $scope.test = "blat";


    });


/*
    function init(){
      $scope.customers = basicFactory.getCustomers();
    }

    init();
    
    $scope.addCustomer = function (){
      $scope.customers.push({name:$scope.newCustomer.name, city:$scope.newCustomer.city});
    }
*/





//controller collection
var NotNotControllers = angular.module('NotNotControllers', []);

  
//  NotController
NotNotControllers.controller('NotController', function ($scope, $http, $location, storageService) {

  localStorage.clear();

  // get a random word if selected
  $scope.GetRandomWord = function (){

    var url = "http://randomword.setgetgo.com/get.php?callback=JSON_CALLBACK";
    $http.jsonp(url)
      .success(function(d){
        for (o in d){
               $scope.subject = d[o];
        }
      
      }).error(function(d) {
        console.log('error');

      });
    
  };


  //set the is/are variable
        $scope.isaretoggle = "is not";

        $scope.toggleisare = function(){
          if ($scope.isaretoggle == "is not") { 
            $scope.isaretoggle = "are not";
          }else{
            $scope.isaretoggle = "is not";
          }
        }


  //get the nots, maybe delete them?
  var notnots = storageService.get('notnot');
  console.log("l:" + notnots.length);

    for (thing in notnots){
      console.log(notnots[thing].not);
    }




  // process the form, maybe turn to service and/or seperate controller
  $scope.processForm = function() {
      var subject = $scope.subject.trim();
      var not = $scope.thenot.trim();
      var isare = $scope.isaretoggle
      if (!subject.length) {
      return;
    }

    notnots.push({
      subject: subject,
      not: not,
      isare: isare
    });

    
    /*debug for (i in notnots){
      console.log(notnots[i].subject);
      console.log(notnots[i].not);
      console.log(notnots[i].isare);      
    }*/

    storageService.set('notnot', notnots);



    $location.path('/isnot');
  };
});


//  NotController
NotNotControllers.controller('NotNotController', function ($scope, $location, $http, storageService) {

  //retrieve the notnots
  $scope.notnots = storageService.get('notnot');
  
     for (i in $scope.notnots){
      console.log($scope.notnots[i].subject);
      console.log($scope.notnots[i].not);
      console.log($scope.notnots[i].isare);      
    }



  //for showing and hiding the Suggest view
  $scope.suggest = "Suggest?";
  $scope.isaretoggle = "is not";


  //
  $scope.setnotnotnot = function (){
    $scope.notnotnot = $scope.suggestions.syn;
    $scope.showants = false;
  }

  
        $scope.toggleisare = function(){
          if ($scope.isaretoggle == "is not") { 
            $scope.isaretoggle = "are not";
          }else{
            $scope.isaretoggle = "is not";
          }
        }



  //hide suggestion box until needed
  $scope.showants = false;



  $scope.SubjectIsNot = $scope.notnots[$scope.notnots.length-1].not; 
  //var NotNotIsAre = $scope.NotNotIsAre = notnots[notnots.length-1].isare;
  
  console.log("l:" + $scope.notnots.length);


    var ants = $scope.ants = [
      {syn : "..."}
      ];

   $scope.suggestions = $scope.ants[0];  


   $scope.getSyns = function(){
    null;
   }



  $scope.getAntonyms = function() {

        //thesaurus settings 
    var urlbase = 'http://words.bighugelabs.com/api',
    version = '2',
    key = 'ea61abbf879c8cd605995a860703f119',
    format = 'json',
    word;


    var callback = 'JSON_CALLBACK';
    word = $scope.SubjectIsNot;
    url = urlbase + '/' +  version + '/' + key + '/' + word + '/' + format + '?callback='+callback;


    // set the lookup word, which is part of the url


  //http://words.bighugelabs.com/apisample.php?v=2&format=json

    var superants = [];
    $http.jsonp(url)
      .success(function(d){
        //show suggestion box until needed
        $scope.showants = true;



        for (o in d){
               console.log('d0: ' + d[o].ant);
        superants = d[o].ant;
        for (a in superants){
          $scope.ants.push({
            syn: superants[a]
          });
          console.log(superants[a]);
          //document.getElementById("antonymfor").innerHTML += "<button class='btn btn-success' onclick='fillnotnot(&quot;"+ants[a]+"&quot;);return false;' id='antbutton"+a+"'>"+(ants[a])+"</button>";
        }
      }
      }).error(function(d) {
        $scope.suggest = "no results found; roll your own";

      });
    
  };

  $scope.processNotNot = function (){
    alert('notnotnot is: ' + $scope.notnotnot);
    

      $scope.notnots.push({
      subject: $scope.notnots[$scope.notnots.length-1].subject,
      not: $scope.notnots[$scope.notnots.length-1].not,
      isare: $scope.notnots[$scope.notnots.length-1].isare, //look at original comp
      notnotnot: $scope.notnotnot  //only new value pretty lazy array work
    });

    console.log('notnotnot from array: ' + $scope.notnots[$scope.notnots.length-1].notnotnot);
    console.log('not from array: ' + $scope.notnots[$scope.notnots.length-1].not);
    console.log('subject from array: ' + $scope.notnots[$scope.notnots.length-1].subject);
        console.log('isare from array: ' + $scope.notnots[$scope.notnots.length-1].isare);

    storageService.set('notnot', $scope.notnots);

    $location.path('/truth');
    return false;

  };

});

//  TruthController
NotNotControllers.controller('TruthController', function ($scope, $location, storageService) {

  //retrieve the notnots
  var notnots = $scope.notnots = storageService.get('notnot');

  $scope.Subject = notnots[notnots.length-1].subject; 
  $scope.IsAre = notnots[notnots.length-1].isare;
  $scope.Not = notnots[notnots.length-1].not;
  $scope.NotNotNot = notnots[notnots.length-1].notnotnot;
  console.log("l:" + notnots.length);




  $scope.processNotNot = function (){
    console.log('in processNotNot');
  };


});


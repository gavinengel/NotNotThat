

//controller collection
var NotNotControllers = angular.module('NotNotControllers', []);

  
//  NotController
NotNotControllers.controller('NotController', function ($scope, $http, $location, storageService) {

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

    console.log('isaresub: ' + notnots[notnots.length-1].isare);
    storageService.set('notnot', notnots);


    $location.path('/isnot');
  };
});


//  NotController
NotNotControllers.controller('NotNotController', function ($scope, $location, $http, storageService) {

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

  // is are dropdown, set to is     
  $scope.verbs = [
                {tense:'is not'},
                {tense:'are not'}
                ];
  
  $scope.verbtense = $scope.verbs[0]; // is



  //hide suggestion box until needed
  $scope.showants = false;

  //retrieve the notnots
  var notnots = $scope.notnots = storageService.get('notnot');

  var SubjectIsNot = $scope.SubjectIsNot = notnots[notnots.length-1].not; 
  var NotNotIsAre = $scope.NotNotIsAre = notnots[notnots.length-1].isare;
  
  console.log("l:" + notnots.length);


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
    word = SubjectIsNot;
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
    

      notnots.push({
      subject: notnots[length-1].subject,
      not: notnots[length-1].not,
      isare: notnots[length-1].isare, //look at original comp
      notnotnot: $scope.notnotnot  //only new value pretty lazy array work
    });

    console.log('notnotnot from array: ' + notnots[notnots.length-1].notnotnot);
    console.log('not from array: ' + notnots[notnots.length-1].not);
    console.log('subject from array: ' + notnots[notnots.length-1].subject);
        console.log('isare from array: ' + notnots[notnots.length-1].isare);

    storageService.set('notnot', notnots);

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


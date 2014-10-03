

//controller collection
var NotNotControllers = angular.module('NotNotControllers', []);

  
//  NotController
NotNotControllers.controller('NotController', function ($scope, $location, storageService) {


  //get the nots, maybe delete them?
  var notnots = $scope.notnots = storageService.get('notnot');

  console.log("l:" + notnots.length);

  // is are dropdown, set to is     
  $scope.verbs = [
                {tense:'is not'},
                {tense:'are not'}
                ];
  
  $scope.verbtense = $scope.verbs[0]; // is


  // process the form, maybe turn to service and/or seperate controller
  $scope.processForm = function() {
      var subject = $scope.subject.trim();
      var not = $scope.thenot.trim();
      var isare = $scope.verbtense.tense;
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

  $scope.suggest = "Suggest?";


  $scope.setnotnotnot = function (){
    $scope.notnotnot = $scope.suggestions.syn;
    $scope.showants = false;
  }



        $scope.isaretoggle = "is not";

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
  $scope.NotNotIsAre = notnots[notnots.length-1].isare;
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
    console.log('in processNotNot');
  };

});

//  TruthController
NotNotControllers.controller('TruthController', function ($scope, $location, storageService) {

  //retrieve the notnots
  var notnots = $scope.notnots = storageService.get('notnot');

  $scope.Subject = notnots[notnots.length-1].subject; 
  $scope.IsAre = notnots[notnots.length-1].isare;
  $scope.NotNot = "BLAM!";
  console.log("l:" + notnots.length);




  $scope.processNotNot = function (){
    console.log('in processNotNot');
  };


});


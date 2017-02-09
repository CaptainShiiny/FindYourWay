angular.module("findyourway").controller("ClueController", ["$scope", "$http","Clue",

    function($scope, $http, Clue){

        $scope.showClue = function(){
            return Clue.showClue;
        }

        $scope.$watch($scope.showClue, function(newValue){
              if(localStorage.getItem("to_guess")){
                  url = localStorage.getItem("to_guess");
                  $http.get(url).then(function(response){
                      var info = {};
                      info.label = response.data[1].data.label;
                      info.position = response.data[1].data.position;
                      $scope.clue = new Clue(info);
                  }, function(error){
                      console.log(error);
                      localStorage.removeItem("to_guess");
                  });
              }

        });
    }

]);

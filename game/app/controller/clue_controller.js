angular.module("findyourway").controller("ClueController", ["$scope", "$http","Clue",

        function($scope, $http, Clue){

          $scope.showClue = function(){
                return Clue.showClue;
        }
        
       

        $scope.$watch($scope.showClue, function(newValue){

              if(newValue){
                  $http.get(localStorage.getItem("clues_game_in_progress"))
                  .then(function(response){
                      console.log(response);


                  });
              }

            });
        }]);
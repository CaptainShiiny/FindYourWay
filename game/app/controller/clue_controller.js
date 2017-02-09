angular.module("findyourway").controller("ClueController", ["$scope", "$http","Clue",

    function($scope, $http, Clue){

        $scope.showClue = function(){
            return Clue.showClue;
        }

        $scope.$watch($scope.showClue, function(newValue){
            if(newValue){
                url = localStorage.getItem("game_in_progress")+"/clues";
                $http.get(url, {
                    headers: {
                        "Authorization": localStorage.getItem("token")
                    }
                }).then(function(response){
                    console.log(response);
                }, function(error){
                    console.log(error);
                });
            }
            //   if(localStorage.getItem("to_guess")){
            //       url = localStorage.getItem("to_guess");
            //       $http.get(url).then(function(response){
            //           var info = {};
            //           info.label = response.data[1].data.label;
            //           info.position = response.data[1].data.position;
            //           $scope.clue = new Clue(info);
            //       }, function(error){
            //           console.log(error);
            //           localStorage.removeItem("to_guess");
            //       });
            //   }

        });
    }

]);

angular.module("findyourway").controller("ClueController", ["$scope", "$http","Clue",

    function($scope, $http, Clue){
        console.log($scope);
        $scope.showClue = function(){
            console.log("edsf");
            // return Clue.showClue;
        }

    }

]);

        // function($scope, $http, Clue){
        //
        //   $scope.show = function(){
        //       console.log("defres");
        //         // return Clue.show;
        // }
        //
        //
        //
        // $scope.$watch($scope.show, function(newValue){
        //     console.log(newValue);
        //       if(newValue){
        //           $http.get(localStorage.getItem("clues_game_in_progress"))
        //           .then(function(response){
        //               console.log(response);
        //           }, function(error){
        //               console.log(error);
        //           });
        //       }
        //
        //     });
        // }]);

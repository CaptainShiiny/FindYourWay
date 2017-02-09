angular.module("findyourway").controller("ClueController", ["$scope", "$http","Clue",

    function($scope, $http, Clue){

        $scope.showClue = function(){
            return Clue.showClue;
        }

        $scope.$watch($scope.showClue, function(newValue){
            if(newValue){
                var clue_id = newValue[1];
                url = localStorage.getItem("game_in_progress")+"/clues/"+clue_id;
                token = localStorage.getItem("token");
                $http.put(url, {}, {
                    headers: {
                        "Authorization": token
                    }
                }).then(function(response){
                    $scope.getClues();
                }, function(error){
                    console.log(error);
                });
            }
        });

        $scope.getClues = function(){
            url = localStorage.getItem("game_in_progress")+"/clues";
            token = localStorage.getItem("token");
            $http.get(url, {
                headers: {
                    "Authorization": token
                }
            }).then(function(response){
                console.log(response);
                $scope.clues = [];
                response.data[1].data.forEach(function(data){
                    var newClue = new Clue(data)
                    $scope.clues.push(newClue);
                });
            }, function(error){
                console.log(error);
            });
        }

    }

]);

angular.module("findyourway").controller("ClueController", ["$scope", "$http","Clue",

    function($scope, $http, Clue){

        $scope.show = function(){
            return Clue.show;
        }

        $scope.$watch($scope.show, function(newValue){
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
                    console.log("indice");
                  
                }, function(error){
                    console.log(error);
                });
            }
        });

       $scope.getClues = function(){
            url = localStorage.getItem("game_in_progress")+"/clues";
            console.log(url);
            token = localStorage.getItem("token");
            $http.get(url, {
                headers: {
                    "Authorization": token
                }
            }).then(function(response){
                //console.log(response);
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

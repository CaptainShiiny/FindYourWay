angular.module("findyourway").controller("PlayerController",
["$scope", "$http", "Player", "Game",

    function($scope, $http, Player, Game){

        $scope.add = function(){
            return Player.add;
        }

        $scope.$watch($scope.add, function(newValue, oldValue){
            if(newValue){
                $http.post(api_url+"/players", {
                    "pseudo": newValue
                }).then(function(response){
                    var id = response.data[1].data.links.self;
                    id = id.split("/");
                    id = id[id.length-1];
                    var token = response.data[1].data.token;
                    localStorage.setItem("token", token);
                    var data = {"id": id,"pseudo": newValue, "token": token};
                    $scope.player = new Player(data);
                    $scope.getRandomDestination(id);
                },function(error){
                    console.log(error);
                });
            }
        });

        $scope.getRandomDestination = function(player_id){
            $http.get(api_url+"/destinations").then(function(response){
                var destinations_number = response.data[1].data.destinations_number;
                var random_value = Math.random() * (destinations_number - 1);
                random_value = Math.ceil(random_value);
                var destination_selected_link = response.data[1].data.destinations[random_value].links.self;
                var destination_id = destination_selected_link.split("/");
                $scope.initGame(player_id, destination_id[destination_id.length-1]);
            }, function(error){
                console.log(error);
            });
        }

        $scope.initGame = function(player_id, destination_id){
            if(player_id){
                $http.post(
                    api_url+"/players/"+player_id+"/destinations/"+destination_id+"/games", {},
                    {
                        headers: {"Authorization": localStorage.getItem("token")}
                    }).then(function(response){
                        var game_id = response.data[1].data.links.self;
                        game_id = game_id.split("/");
                        game_id = game_id[game_id.length-1];
                        var data = {"id": game_id, "score": 0};
                        $scope.game = new Game(data);
                    }, function(error){
                        console.log(error);
                    });
            }
        }

    }

]);

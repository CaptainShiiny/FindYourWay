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
                        var data = {"id": game_id, "score": 0, "destination_id": destination_id};
                        $scope.game = new Game(data);
                    }, function(error){
                        console.log(error);
                    });
            }
        }

        $scope.newScore = function(){
            return Player.newScore;
        }

        $scope.$watch($scope.newScore, function(newValue, oldValue){
            if(newValue){
                var score = newValue;
                if(localStorage.getItem("score")){
                    score = score+localStorage.getItem("score");
                }
                localStorage.setItem("score", score);
                var url = api_url+"/players/"+$scope.player.id+"/games/"+$scope.game.id;
                $http.put(url, {
                    "score": score
                },{
                    headers: {
                        "Authorization": localStorage.getItem("token")
                    }
                }).then(function(response){
                    $scope.newClue();
                }, function(error){
                    console.log(error);
                });
            }
        });

        $scope.newClue = function(){
            var url_clue = api_url+"/players/"+$scope.player.id+"/games/"+$scope.game.id+"/clues";
            $http.get(url_clue, {
                headers: {
                    "Authorization": localStorage.getItem("token")
                }
            }).then(function(response_clue){
                clues_win_tab = [];
                response_clue.data[1].data.forEach(function(data_clue){
                    clues_win_tab.push(data_clue.name);
                });
                $scope.verifClueIsExist(clues_win_tab);
            }, function(error_clue){
                console.log(error_clue);
            });
        }

        $scope.verifClueIsExist = function(clues_win_tab){
            var url = api_url+"/destinations/"+$scope.game.destination_id+"/clues";
            $http.get(url, {
                headers: {
                    "Authorization": localStorage.getItem("token")
                }
            }).then(function(response){
                var tab = [];
                if(clues_win_tab.length == 0){
                    tab.push(data.id);
                }
                response.data[1].data.clues.forEach(function(data){
                    clues_win_tab.forEach(function(t){
                        if(t != data.label){
                            tab.push(data.id);
                        }
                    });
                });
                $scope.displayClue(tab[0]);
            }, function(error){
                console.log(error);
            });
        }

        $scope.displayClue = function(clue_id_win){
            if(clue_id_win){
                var url = api_url+"/players/"+$scope.player.id+"/games/"+$scope.game.id+"/clues/"+clue_id_win;
                $http.put(url, {}, {
                    headers: {
                        "Authorization": localStorage.getItem("token")
                    }
                }).then(function(response){
                    $scope.refreshGameData();
                }, function(error){
                    console.log(error);
                });
            }
        }

        $scope.refreshGameData = function(){
            var url = api_url+"/players/"+$scope.player.id+"/games/"+$scope.game.id+"/clues";
            $http.get(url, {
                headers: {
                    "Authorization": localStorage.getItem("token")
                }
            }).then(function(response){
                var data_clues = response.data[1].data;
                var data = {
                    "id": $scope.game.id,
                    "score": localStorage.getItem("score"),
                    "clues": response.data[1].data,
                    "destination_id": $scope.game.destination_id
                };
                $scope.game = new Game(data);
            }, function(error){
                console.log(error);
            });
        }

    }

]);

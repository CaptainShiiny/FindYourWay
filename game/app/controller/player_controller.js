angular.module("findyourway").controller("PlayerController", ["$scope", "$http", "Player",

    function($scope, $http, Player){

        $scope.add = function(){
            return Player.add;
        }
        $scope.$watch($scope.add, function(newValue, oldValue){
            if(newValue){
                var url = api_url+"/players";
                $http.post(url, {
                    "pseudo": newValue
                }).then(function(response){
                    var token = response.data[1].data.token;
                    url = response.data[1].data.links.self;
                    $scope.getDestination(url, token);
                },function(error){
                    console.log(error);
                });
            }
        });

        $scope.getDestination = function(url, token){
            if(url){
                var url_to_destinations = api_url+"/destinations";
                $http.get(url_to_destinations).then(function(response){
                    var destinations_number = response.data[1].data.destinations_number;
                    var random_value = Math.random() * (destinations_number - 1);
                    random_value = Math.ceil(random_value);
                    var destination_selected_link = response.data[1].data.destinations[random_value].links.self;
                    var destination_id = destination_selected_link.substr(destination_selected_link.length - 1);
                    $scope.addGame(url, destination_id, token);
                },function(error){
                    console.log(error);
                });
            }
        }

        $scope.addGame = function(url, destination_id, token){
            if(destination_id){
                url = url+"/destinations/"+destination_id+"/games";
                console.log(token);
                $http.post(url, {}, {
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded",
                        "Authorization": token
                    }
                }).then(function(response){
                    $scope.getGame(response.data[1].data.links.self, token);
                },function(error){
                    console.log(error);
                });
            }
        }

        $scope.getGame = function(url, token){
            if(url){
                $http.get(url, {
                    headers: {
                        "Authorization": token
                    }
                }).then(function(response){
                    var info = {};
                    info.pseudo = response.data[1].data.joueur;
                    info.token = token;
                    info.game_in_progress = {"score": response.data[1].data.score, "destination": response.data[1].data.destination};
                    $scope.player = new Player(info);
                },function(error){
                    console.log(error);
                });
            }
        }

    }

]);

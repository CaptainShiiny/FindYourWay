angular.module("findyourway").controller("PlayerController", ["$scope", "$http", "Player",

    function($scope, $http, Player){

        $scope.add = function(){
            return Player.add;
        }
        $scope.$watch($scope.add, function(newValue, oldValue){
            if(newValue){
                var url = "http://localhost/lFindYourWay/api/api.php/players";
                $http.post(url, {
                    "pseudo": newValue
                }).then(function(response){
                    $scope.getInfo(response.data[1].data);
                },function(error){
                    console.log(error);
                });
            }
        });

        $scope.getInfo = function(info){
            if(info.token){
                var url = info.links.self;
                $http.get(url, {
                    headers: {
                        "Authorization": info.token
                    }
                }).then(function(response){
                    info.pseudo = response.data[1].data.pseudo;
                    $scope.player = new Player(info);
                    console.log($scope.player);
                },function(error){
                    console.log(error);
                });
            }
        }

    }

]);

angular.module("backoffice").controller("DestinationsController",["$scope", "$http", "Destination",
    function($scope, $http, Destination){
        var url_base = "http://localhost/LP/FindYourWay/api/api.php";
        var localhost = "http://localhost";

        //On affiche toutes les destinations
        $http.get(url_base+"/destinations/").then(function(response){
            $scope.destinations = [];
            response.data[1].data.destinations.forEach(function(data){
                var info = {};
                info.name = data.name;
                info.url = data.links.self;
                var newDestination = new Destination(info);
                $scope.destinations.push(newDestination);
            });
        },function(error){
            console.log(error);
        });

        // On ajoute une destination
        $scope.add = function(){
            return Destination.add;
        }
        $scope.$watch($scope.add, function(newValue, oldValue){
            if (newValue) {
                var url = url_base+"/destinations/";
                $http.post(url, {
                        "label": newValue[1],
                        "latitude": newValue[2],
                        "longitude": newValue[3],
                        "name": newValue[0]
                    }).then(function(response){
                    $scope.refresh();
                },function(error){
                    console.log(error);
                });
            }
        });

        // On supprime une destination
        $scope.deleteDestination = function(){
            return Destination.deleteDestination;
        }
        $scope.$watch($scope.deleteDestination, function(newValue, oldValue){
            if (newValue) {
                var url = localhost+newValue['url'];
                $http.delete(url).then(function(response){
                    $scope.refresh();
                },function(error){
                    console.log(error);
                });
            }
        });

        // On rafraîchit la page
        $scope.refresh = function(){
            $http.get(url_base+"/destinations/").then(function(response){
                $scope.destinations = [];
                response.data[1].data.destinations.forEach(function(data){
                    var info = {};
                    info.name = data.name;
                    info.url = data.links.self;
                    var newDestination = new Destination(info);
                    $scope.destinations.push(newDestination);
                });
            },function(error){
                console.log(error);
            });
        }
    }
]);

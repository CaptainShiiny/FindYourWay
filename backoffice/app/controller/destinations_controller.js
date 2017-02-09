angular.module("backoffice").controller("DestinationsController",["$scope", "$http", "Destination",
    function($scope, $http, Destination){

        //On affiche toutes les destinations
        $http.get(url_api+"/destinations/").then(function(response){
            $scope.destinations = [];
            response.data[1].data.destinations.forEach(function(data){
                var info = {};
                info.id = data.id;
                info.name = data.name;
                info.url = data.links.self;

                $http.get(url_api+"/destinations/"+info.id).then(function(response){
                    data = [response.data[1].data];
                    data.forEach(function(data){
                        info.label = data.label;
                        info.latitude = data.latitude;
                        info.longitude = data.longitude;
                        var newDestination = new Destination(info);
                        $scope.destinations.push(newDestination);
                    });
                }, function(error){
                    console.log(error);
                });
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
                var url = url_api+"/destinations/";
                $http.post(url, {
                    "label": newValue[1],
                    "latitude": newValue[2],
                    "longitude": newValue[3],
                    "name": newValue[0]
                }).then(function(response){
                    $scope.refresh();
                    $scope.showForm = false;
                    $scope.name = "";
                    $scope.label = "";
                    $scope.latitude = "";
                    $scope.longitude = "";
                },function(error){
                    console.log(error);
                });
            }
        });

        // On modifie une destination
        $scope.modifyDestination = function(){
            return Destination.modifyDestination;
        }
        $scope.$watch($scope.modifyDestination, function(newValue, oldValue){
            if (newValue) {
                var url = url_api+"/destinations/"+newValue.id;
                $http.put(url, {
                    "label": newValue['label'],
                    "latitude": newValue['latitude'],
                    "longitude": newValue['longitude'],
                    "name": newValue['name']
                }).then(function(response){
                    $scope.refresh();
                    $scope.showForm = false;
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
                var url = url_api+"/destinations/"+newValue.id;
                $http.delete(url).then(function(response){
                    $scope.refresh();
                },function(error){
                    console.log(error);
                });
            }
        });

        // On rafraîchit la page
        $scope.refresh = function(){
            $http.get(url_api+"/destinations/").then(function(response){
                $scope.destinations = [];
                response.data[1].data.destinations.forEach(function(data){
                    var info = {};
                    info.id = data.id;
                    info.name = data.name;
                    info.url = data.links.self;

                    $http.get(url_api+"/destinations/"+info.id).then(function(response){
                        data = [response.data[1].data];
                        data.forEach(function(data){
                            info.label = data.label;
                            info.latitude = data.latitude;
                            info.longitude = data.longitude;
                            var newDestination = new Destination(info);
                            $scope.destinations.push(newDestination);
                        });
                    }, function(error){
                        console.log(error);
                    });
                });
            },function(error){
                console.log(error);
            });
        }
    }
]);

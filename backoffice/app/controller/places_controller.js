angular.module("backoffice").controller("PlacesController",["$scope", "$http", "Place",
    function($scope, $http, Place){

        //On affiche tous les lieux
        $http.get(url_api+"/places/").then(function(response){
            $scope.places = [];
            response.data[1].data.places.forEach(function(data){
                var info = {};
                info.id = data.id;
                info.label = data.label;
                info.latitude = data.latitude;
                info.longitude = data.longitude;
                info.url = data.links.self;
                var newPlace = new Place(info);
                $scope.places.push(newPlace);
            });
        },function(error){
            console.log(error);
        });

        // On ajoute une destination
        $scope.add = function(){
            return Place.add;
        }
        $scope.$watch($scope.add, function(newValue, oldValue){
            if (newValue) {
                var url = url_api+"/places/";
                $http.post(url, {
                    "label": newValue[0],
                    "latitude": newValue[1],
                    "longitude": newValue[2]
                }).then(function(response){
                    $scope.refresh();
                    $scope.showFormPlaces = false;
                    $scope.label = "";
                    $scope.latitude = "";
                    $scope.longitude = "";
                },function(error){
                    console.log(error);
                });
            }
        });

        // On modifie un lieu
        $scope.modifyPlace = function(){
            return Place.modifyPlace;
        }
        $scope.$watch($scope.modifyPlace, function(newValue, oldValue){
            if (newValue) {
                var url = url_api+"/places/"+newValue.id;
                $http.put(url, {
                    "label": newValue['label'],
                    "latitude": newValue['latitude'],
                    "longitude": newValue['longitude']
                }).then(function(response){
                    $scope.refresh();
                    $scope.showModifyFormPlaces = false;
                },function(error){
                    console.log(error);
                });
            }
        });

        // On supprime un lieu
        $scope.deletePlace = function(){
            return Place.deletePlace;
        }
        $scope.$watch($scope.deletePlace, function(newValue, oldValue){
            if (newValue) {
                var url = url_api+"/places/"+newValue.id;
                $http.delete(url).then(function(response){
                    $scope.refresh();
                },function(error){
                    console.log(error);
                });
            }
        });

        // On rafraîchit la page
        $scope.refresh = function(){
            $http.get(url_api+"/places/").then(function(response){
                $scope.places = [];
                response.data[1].data.places.forEach(function(data){
                    var info = {};
                    info.id = data.id;
                    info.label = data.label;
                    info.latitude = data.latitude;
                    info.longitude = data.longitude;
                    info.url = data.links.self;
                    var newPlace = new Place(info);
                    $scope.places.push(newPlace);
                });
            },function(error){
                console.log(error);
            });
        }
    }
]);

angular.module("findyourway").controller("PlaceController",
["$scope", "$http", "Place",

    function($scope, $http, Place){

        $scope.select = function(){
            return Place.select;
        }

        $scope.$watch($scope.select, function(newValue, oldValue){
            if(newValue){
                var url = api_url+"/places";
                $http.get(url).then(function(response){
                    var places_tab = response.data[1].data.places;
                    var number_places = places_tab.length;

                    var randPlaces = [];
                    for(var i=0; i<5; i++){
                        place = places_tab[Math.floor(Math.random()*(number_places-1))];
                        data = {"id": place.id, "label": place.label, "latitude": place.latitude, "longitude": place.longitude};
                        var newPlace = new Place(data);
                        randPlaces.push(newPlace);
                    }
                    $scope.places = randPlaces;
                },function(error){
                    console.log(error);
                });
            }
        });

    }

]);

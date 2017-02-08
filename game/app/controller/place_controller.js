angular.module("findyourway").controller("PlaceController", ["$scope", "$http", "Place",

    function($scope, $http, Place){


        $scope.randPlaces = function(){
            return Place.randPlaces;
        }
        $scope.$watch($scope.randPlaces, function(newValue){
            if(newValue[1] == "true"){
                var url = api_url+"/places";
                $http.get(url).then(function(response){
                    var places_tab = response.data[1].data.places;
                    var number_places = places_tab.length;

                    var randPlaces = [];
                    for(var i=0; i<5; i++){
                        randPlaces.push(places_tab[Math.floor(Math.random()*(number_places-1))]);
                    }
                    var places = [];
                    for(i = 0; i<randPlaces.length; i++){
                        var info = {};
                        info.latitude = randPlaces[i].latitude;
                        info.longitude = randPlaces[i].longitude;
                        info.label = randPlaces[i].label;
                        info.url = randPlaces[i].links.self;
                        var newPlace = new Place(info);
                        places.push(newPlace);
                    }
                    $scope.places = places;
                },function(error){
                    console.log(error);
                });

            };
                    
        })
    
    }]
);


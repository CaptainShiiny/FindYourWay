angular.module("findyourway").controller("PlaceController",
        ["$scope", "$http","Place",

        function($scope, $http, Place){

            $scope.randPlaces = function(){
                return Place.randPlaces;
                
            }

            $scope.randPlaces = function(){
                
                $http.get('http://localhost/Atelier_2/FindYourWay/api/api.php/places')
                .then(function(response){
                    Listplaces = [];
                    response.data[1].data.places.forEach(function(elt){
                        place = new Place(elt);
                        lat = place.latitude;
                        lng = place.longitude;
                        label = place.label;
                        Listplaces.push(place);
                        
                        
                        //console.log(place);
                    })
                    var number_places = response.data[1].data.places_number;
                    
                    var randPlaces = [];
                    for(var i=0; i<5;i++){
                        randPlaces.push(Listplaces[Math.floor(Math.random()*number_places)]);
                    }
                    console.log(randPlaces);
                    

                }, function(error){ 

                    console.log(error);
                });
            };
                    
        }
    ]
);
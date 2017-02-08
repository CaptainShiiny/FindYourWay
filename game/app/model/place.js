angular.module("findyourway").service("Place",["$http",
    function($http){
        var Place = function(data){

            this.longitude = data.longitude;
            this.latitude = data.latitude;
            this.label = data.label;

        }
        Place.randPlaces = function(){
            Place.randPlaces;           
        }
        

        return Place;
    }
]);
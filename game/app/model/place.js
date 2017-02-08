angular.module("findyourway").service("Place", ["$http",
    function($http){
        var Place = function(data){
            this.latitude = data.latitude;
            this.longitude = data.longitude;
            this.label = data.label;
            this.url = data.url;
        }

        Place.randPlaces = function(verif){
            Place.randPlaces = [this, verif];
        }

        return Place;
    }
]);

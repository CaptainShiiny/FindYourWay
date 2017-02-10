angular.module("findyourway").service("Place",[
    "$http",
    function($http){
        var Place = function(data){
            this.id = data.id;
            this.label = data.label;
            this.latitude = data.latitude;
            this.longitude = data.longitude;
        }

        Place.selectPlaces = function(){
            Place.select = this;
        }

        return Place;
    }
]);

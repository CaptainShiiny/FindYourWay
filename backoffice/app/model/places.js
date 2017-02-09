angular.module("backoffice").service("Place",["$http",
    function($http){
        var Place = function(data){
            this.id = data.id;
            this.url = data.url;
            this.latitude = data.latitude;
            this.longitude = data.longitude;
            this.label = data.label;
        }

        Place.addPlace = function(values){
            Place.add = values;
        }

        Place.prototype.deletePlace = function(){
            Place.deletePlace = this;
        }

        Place.prototype.modifyPlace = function(){
            Place.modifyPlace = this;
        }

        return Place;
    }
]);

angular.module("backoffice").service("Destination",["$http",
    function($http){
        var Destination = function(data){
            this.id = data.id;
            this.name = data.name;
            this.url = data.url;
            this.latitude = data.latitude;
            this.longitude = data.longitude;
            this.label = data.label;
        }

        Destination.addDestination = function(values){
            Destination.add = values;
        }

        Destination.prototype.deleteDestination = function(){
            Destination.deleteDestination = this;
        }

        Destination.prototype.modifyDestination = function(){
            Destination.modifyDestination = this;
        }

        return Destination;
    }
]);

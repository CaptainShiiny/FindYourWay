angular.module("backoffice").service("Destination",["$http",
    function($http){
        var Destination = function(data){
            this.id = data.id;
            this.name = data.name;
            this.url = data.url;
        }

        Destination.addDestination = function(values){
            Destination.add = values;
        }

        Destination.prototype.deleteDestination = function(){
            Destination.deleteDestination = this;
        }

        return Destination;
    }
]);

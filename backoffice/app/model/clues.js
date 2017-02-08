angular.module("backoffice").service("Clues",["$http",
    function($http){
        var Clues = function(data){
            console.log(this);
        }

        // Destination.addDestination = function(values){
        //     Destination.add = values;
        // }
        //
        // Destination.prototype.deleteDestination = function(){
        //     Destination.deleteDestination = this;
        // }

        return Clues;
    }
]);

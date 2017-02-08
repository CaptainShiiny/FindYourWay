angular.module("findyourway").directive("place", [
    "Map",
    function(Map){
        return{
            restrict: "E",
            templateUrl: "app/templates/place.html",
            link: function(scope, element, attrs){
                scope.propose = function(place){
                    $("#indication").show();
                    $("#indication").text("Où se trouve \""+place.label+"\"?");
                    comparaisonDestinationFinale(place.latitude, place.longitude);
                }
               
            }
        };
    }
]);

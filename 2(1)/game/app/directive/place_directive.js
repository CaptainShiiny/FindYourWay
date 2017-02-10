angular.module("findyourway").directive("place", [
    "Place",
    function(Place){
        return{
            restrict: "E",
            templateUrl: "app/templates/place.html",
            link: function(scope, elements, attrs){
                scope.propose = function(place){
                    $("#indication").show();
                    $("#indication").text("Où se trouve \""+place.label+"\"?");
                    comparaisonDestinationFinale(place.latitude, place.longitude);
                }
            }
        };
    }
]);

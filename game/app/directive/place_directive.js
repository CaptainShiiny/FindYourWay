angular.module("findyourway").directive("place", [
    "Map",
    function(Map){
        return{
            restrict: "E",
            templateUrl: "app/templates/place.html",
            link: function(scope, element, attrs){
                scope.propose = function(place){
                    localStorage.setItem("to_guess", $(this)[0].place.linked_clue);
                    $("#indication").show();
                    $("#indication").text("Où se trouve \""+place.label+"\"?");
                    comparaisonDestinationFinale(place.latitude, place.longitude, place.url);
                }
               
            }
        };
    }
]);

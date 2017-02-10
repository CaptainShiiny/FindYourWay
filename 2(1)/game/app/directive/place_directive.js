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
                    
                    scope.delete(place);
                    
                }
                scope.delete = function(p){
                        var tab_places = scope.places; 
                        var index = tab_places.indexOf(p);
                        tab_places.splice(index,1);

                }
                
            }
        };
    }
]);

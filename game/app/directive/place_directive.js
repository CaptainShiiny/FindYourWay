angular.module("findyourway").directive("place", [
    "Map",
    function(Map){
        return{
            restrict: "E",
            templateUrl: "app/templates/place.html",
            link: function(scope, element, attrs){
                scope.propose = function(place){
                    localStorage.setItem("latitude", place.latitude);
                    localStorage.setItem("longitude", place.longitude);
                    $("#indication").show();
                    $("#indication").text("Où se trouve \""+place.label+"\"?");
                }
            }
        };
    }
]);

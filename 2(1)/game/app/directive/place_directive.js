angular.module("findyourway").directive("place", [
    "Place",
    function(Place){
        return{
            restrict: "E",
            templateUrl: "app/templates/place.html"
        };
    }
]);


angular.module("findyourway").directive("place", [
    function(Player, Place){
        return{
            restrict: "E",
            templateUrl: "app/templates/place.html"
        };
    }
]);


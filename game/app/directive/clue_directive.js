angular.module("findyourway").directive("clue", [
    "Map",
    function(Map){
        return{
            restrict: "E",
            templateUrl: "app/templates/clue.html",
           
        };
    }
]);
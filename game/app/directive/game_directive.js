angular.module("findyourway").directive("game", [
    function(List){
        return{
            restrict: "E",
            templateUrl: "app/templates/game.html"
        };
    }
]);

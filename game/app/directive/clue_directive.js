angular.module("findyourway").directive("clue", [
    function(){
        return{
            restrict: "E",
            templateUrl: "app/templates/clue.html"
        };
    }
]);

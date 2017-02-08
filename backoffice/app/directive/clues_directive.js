angular.module("backoffice").directive("clues", ["Clues",
    function(Clues){
        return{
            restrict: "E",
            templateUrl: "app/templates/clues.html",
            link: function(scope, element, attrs){
                
            }
        };
    }
]);

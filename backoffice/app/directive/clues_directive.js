angular.module("backoffice").directive("clues", ["Clue", "Destination",
    function(Clue, Destination){
        return{
            restrict: "E",
            templateUrl: "app/templates/clues.html",
            link: function(scope, element, attrs){
                scope.addClue = function(){
                    values = [scope.label, scope.parent_id, scope.position];
                    Clue.addClue(values);
                },
                scope.deleteClue = function(clue){
                    clue.deleteClue();
                }
            }
        };
    }
]);

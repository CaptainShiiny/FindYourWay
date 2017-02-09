angular.module("backoffice").directive("clues", ["Clue", "Destination",
    function(Clue, Destination){
        return{
            restrict: "E",
            templateUrl: "app/templates/clues.html",
            link: function(scope, element, attrs){
                scope.addClue = function(){
                    values = [scope.label, scope.parent_id, scope.position['name']];
                    Clue.addClue(values);
                },
                scope.deleteClue = function(clue){
                    clue.deleteClue();
                },
                scope.modifyClue = function(clue){
                    if (this.new_label && this.new_position) {
                        clue.label = this.new_label;
                        clue.position = this.new_position.name;
                    }else if (this.new_label) {
                        clue.label = this.new_label;
                    }else if (this.new_position) {
                        clue.position = this.new_position.name;
                    }
                    clue.modifyClue();

                }
            }
        };
    }
]);

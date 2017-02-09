angular.module('findyourway').directive('map', ["Player","Clue",
    function(Player, Clue) {
        return {
            restrict: 'E',
            templateUrl: 'app/templates/map.html',
            link: function(scope, element, attrs){
                scope.clickOnMap = function(){
                    if(localStorage.getItem("score_verify")){
                        if(localStorage.getItem("clues_game_in_progress")){
                            Clue.showClue();
                        }
                        Player.modifyScore(localStorage.getItem("score"));
                    }
                    localStorage.removeItem("score_verify");
                    localStorage.removeItem("score");
                    localStorage.removeItem("to_guess");
                }
            }
        };
    }
])

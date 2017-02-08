angular.module('findyourway').directive('map', ["Player",
    function(Player) {
        return {
            restrict: 'E',
            templateUrl: 'app/templates/map.html',
            link: function(scope, element, attrs){
                scope.clickOnMap = function(){
                    if(localStorage.getItem("score_verify")){
                        Player.modifyScore(localStorage.getItem("score"), localStorage.getItem("score_verify"));
                    }
                    localStorage.removeItem("score_verify");
                    localStorage.removeItem("score");
                }
            }
        };
    }
])

angular.module('findyourway').directive('map', [
    "Player",
    function(Player) {
        return {
            restrict: 'E',
            templateUrl: 'app/templates/map.html',
            link: function(scope, elements, attrs){
                scope.clickOnMap = function(){
                    if(localStorage.getItem("score") && localStorage.getItem("final_destination")){
                        alert("Félicitations, vous avez gagné !");
                        Player.updateScore(localStorage.getItem("score"));
                        localStorage.removeItem("score");
                        localStorage.removeItem("final_destination");
                    }else if(localStorage.getItem("score")){
                        Player.updateScore(localStorage.getItem("score"));
                        localStorage.removeItem("score");
                    }
                }
            }
        };
    }
])

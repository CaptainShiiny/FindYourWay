angular.module("findyourway").directive("player", [
    "Player", "Game",
    function(Player){
        return{
            restrict: "E",
            templateUrl: "app/templates/player.html",
            link: function(scope, element, attrs){
                scope.addPlayer = function(){
                    Player.addPlayer(scope.pseudo);
                    $("#showForm").hide();
                }
            }
        };
    }
]);

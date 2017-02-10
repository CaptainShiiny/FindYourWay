angular.module("findyourway").directive("player", [
    "Player", "Place",
    function(Player, Place){
        return{
            restrict: "E",
            templateUrl: "app/templates/player.html",
            link: function(scope, element, attrs){
                scope.addPlayer = function(){
                    Player.addPlayer(scope.pseudo);
                    $("#showForm").hide();
                    Place.selectPlaces();
                },
                scope.findDestination = function(){
                    Player.findDestination();
                    $("#destination_button").hide();
                }
            }
        };
    }
]);

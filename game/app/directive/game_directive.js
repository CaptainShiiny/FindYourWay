angular.module("findyourway").directive("game", [
    "Player",
    function(Player){
        return{
            restrict: "E",
            templateUrl: "app/templates/game.html",
            link: function(scope, element, attrs){
                scope.displayForm = function(){
                    $("#btnToOpenFormPseudo").hide();
                    $("#formPseudo").show();
                },
                scope.verifyPseudo = function(){
                    $("#formPseudo").hide();
                    Player.add(scope.Pseudo);
                }
            }
        };
    }
]);

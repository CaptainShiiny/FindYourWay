angular.module("findyourway").directive("game", [
    function(){
        return{
            restrict: "E",
            templateUrl: "app/templates/game.html",
            link: function(scope, element, attrs){
                scope.displayForm = function(){
                    $("#btnToOpenFormPseudo").hide();
                    $("#formPseudo").show();
                }
            }
        };
    }
]);

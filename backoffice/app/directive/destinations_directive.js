angular.module("backoffice").directive("destinations", ["Destination", "Clue",
    function(Destination, Clue){
        return{
            restrict: "E",
            templateUrl: "app/templates/destinations.html",
            link: function(scope, element, attrs){
                scope.addDestination = function(){
                    values = [scope.name, scope.label, scope.latitude, scope.longitude];
                    Destination.addDestination(values);
                },
                scope.deleteDestination = function(destination){
                    destination.deleteDestination();
                },
                scope.showAllClues = function(destination){
                    Clue.showAllClues(destination);
                    $("#addClue").show();
                    $('#clueTitle').show();
                }
            }
        };
    }
]);

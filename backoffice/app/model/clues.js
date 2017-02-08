angular.module("backoffice").service("Clue",["$http",
    function($http){
        var Clue = function(data){
            this.label = data.label;
            this.postition = data.position;
        }

        Clue.showAllClues = function(destination){
            Clue.showClues = destination;
        }

        Clue.addClue = function(values){
            console.log(values);
        }
        //
        // Clue.prototype.deleteDestination = function(){
        //     Clue.deleteDestination = this;
        // }

        return Clue;
    }
]);

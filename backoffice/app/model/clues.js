angular.module("backoffice").service("Clue",["$http",
    function($http){
        var Clue = function(data){
            this.id = data.id;
            this.label = data.label;
            this.position = data.position;
            this.url = data.url;
        }

        Clue.showAllClues = function(destination){
            Clue.showClues = destination;
        }

        Clue.addClue = function(values){
            Clue.add = values;
        }

        Clue.prototype.deleteClue = function(){
            Clue.deleteClue = this;
        }

        Clue.prototype.modifyClue = function(){
            Clue.modifyClue = this;
        }

        return Clue;
    }
]);

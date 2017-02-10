angular.module("findyourway").service("Clue", ["$http",
    function($http){
        var Clue = function(data){
            this.name = data.name;
        }
        Clue.showClue = function(clue){
            Clue.showClue = [this, clue];
        }

        return Clue;
    }]);

angular.module("findyourway").service("Game",[
    "$http",
    function($http){
        var Game = function(data){
            this.id = data.id;
            this.score = data.score;
            this.clues = data.clues;
        }

        return Game;
    }
]);

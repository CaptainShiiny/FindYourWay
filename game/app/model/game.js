angular.module("findyourway").service("Game",[
    "$http",
    function($http){
        var Game = function(data){
            this.id = data.id;
            this.score = data.score;
            this.clues = data.clues;
            this.destination_id = data.destination_id;
        }

        return Game;
    }
]);

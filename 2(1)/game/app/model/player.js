angular.module("findyourway").service("Player",[
    "$http",
    function($http){
        var Player = function(data){
            this.id = data.id;
            this.pseudo = data.pseudo;
            this.token = data.token;
        }

        Player.addPlayer = function(pseudo){
            Player.add = pseudo;
        }

        return Player;
    }
]);

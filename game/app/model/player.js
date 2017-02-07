angular.module("findyourway").service("Player",["$http",
    function($http){
        var Player = function(data){
            this.pseudo = data.pseudo;
            this.token = data.token;
        }
        Player.add = function(pseudo){
            Player.add = pseudo;
        }
        console.log(Player);
        return Player;
    }
]);

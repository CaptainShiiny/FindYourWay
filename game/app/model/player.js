angular.module("findyourway").service("Player",["$http",
    function($http){
        var Player = function(data){
            this.pseudo = data.pseudo;
            this.token = data.token;
            this.game_in_progress = data.game_in_progress;
        }
        Player.add = function(pseudo){
            Player.add = pseudo;
        }
        Player.modifyScore = function(score, url){
            Player.updateScore = [this, score, url];
        }
        return Player;
    }
]);

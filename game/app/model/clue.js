angular.module("findyourway").service("Clue", ["$http",
    function($http){

        var Clue = function(data){
            this.label = data.label;
            this.destination_id = data.destination_id;
            this.position = data.position;
        }
        Clue.showClue = function(){
            Clue.showClue = this;
            console.log(this);
        }
        
        return Clue;
    }]);
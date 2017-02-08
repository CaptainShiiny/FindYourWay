angular.module("findyourway").service("Map", ["$http",
    function($http){
        var Map = function(data){
        }
        Map.reloadMap = function(verif){
            Map.reloadMap = [this, verif];
        }
        return Map;
    }
]);

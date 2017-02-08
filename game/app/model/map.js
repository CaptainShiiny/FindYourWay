angular.module("findyourway").service("Map", ["$http",
    function($http){
        var Map = function(data){
            map.box = data;
        }
        Map.reloadMap = function(p){
            Map.reload = [this, p];
        }
        return Map;
    }
]);

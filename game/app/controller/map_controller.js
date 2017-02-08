angular.module("findyourway").controller("MapController", ["$scope", "$http", "Place",

    function($scope, $http, Place){
        $scope.reloadMap = function(){
            return Map.reloadMap;
        }
        $scope.$watch($scope.reloadMap, function(newValue, oldValue){
            if(newValue){
                console.log(newValue);
            }
        })
    }

]);

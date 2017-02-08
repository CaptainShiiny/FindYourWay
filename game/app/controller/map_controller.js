angular.module("findyourway").controller("MapController", ["$scope", "$http", "Place",

    function($scope, $http, Place){
        $scope.reload = function(){
            return Map.reload;
        }
        $scope.$watch($scope.reload, function(newValue, oldValue){
            if(newValue){
                console.log(newValue);
            }
        })
    }

]);

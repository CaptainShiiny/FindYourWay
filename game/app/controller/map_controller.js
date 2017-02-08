angular.module("findyourway").controller("MapController", ["$scope", "$http", "Map",

    function($scope, $http, Map){
        $scope.reload = function(){
            return Map.reload;
        }
        $scope.$watch($scope.reload, function(newValue, oldValue){
            if(newValue){
                var latitude = newValue[1].latitude;
                var longitude = newValue[1].longitude;
                $scope.map_box = "<div id='mapid' style='height:600px; width:900px; cursor:pointer;border-radius:10px;border:solid black 3px;box-shadow:14px 14px 16px #aaa'></div>";
                comparaisonDestinationFinale(latitude, longitude);
            }
        });
    }

]);

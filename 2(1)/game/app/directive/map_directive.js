angular.module('findyourway').directive('map', [
    function() {
        return {
            restrict: 'E',
            templateUrl: 'app/templates/map.html',
            link: function(scope, elements, attrs){
                scope.clickOnMap = function(){
                    
                }
            }
        };
    }
])

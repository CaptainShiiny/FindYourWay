angular.module("findyourway").directive("place", 
["Place", function(Place){

    return{
        restrict: "E",
        templateUrl: "app/templates/place.html", 
        link: function(scope, element, attrs){
            scope.randPlaces = function(){
                //var randPlaces = scope.randPlaces;
                //Place.randPlaces();
                console.log("gg");
            }
            
        }
    };

}]);
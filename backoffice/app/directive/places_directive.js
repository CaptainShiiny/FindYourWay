angular.module("backoffice").directive("places", ["Place",
    function(Place){
        return{
            restrict: "E",
            templateUrl: "app/templates/places.html",
            link: function(scope, element, attrs){
                scope.addPlace = function(){
                    values = [scope.label, scope.latitude, scope.longitude];
                    Place.addPlace(values);
                },
                scope.deletePlace = function(place){
                    place.deletePlace();
                },
                scope.modifyPlace = function(place){
                    place.label = this.new_label || place.label;
                    place.latitude = this.new_latitude || place.latitude;
                    place.longitude = this.new_longitude || place.longitude;
                    place.modifyPlace();
                }
            }
        };
    }
]);

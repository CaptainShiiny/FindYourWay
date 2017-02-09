angular.module("backoffice").directive("destinations", ["Destination", "Clue",
    function(Destination, Clue){
        return{
            restrict: "E",
            templateUrl: "app/templates/destinations.html",
            link: function(scope, element, attrs){
                scope.addDestination = function(){
                    values = [scope.name, scope.label, scope.latitude, scope.longitude];
                    Destination.addDestination(values);
                },
                scope.deleteDestination = function(destination){
                    destination.deleteDestination();
                },
                scope.showAllClues = function(destination){
                    Clue.showAllClues(destination);
                    $("#addClue").show();
                    $('#clueTitle').show();
                },
                scope.modifyDestination = function(destination){
                    if (this.new_name && this.new_label && this.new_latitude && this.new_longitude) {
                        destination.name = this.new_name;
                        destination.label = this.new_label;
                        destination.latitude = this.new_latitude;
                        destination.longitude = this.new_longitude;
                    }else if (this.new_name && this.new_label && this.new_latitude) {
                        destination.name = this.new_name;
                        destination.label = this.new_label;
                        destination.latitude = this.new_latitude;
                    }else if (this.new_name && this.new_label && this.new_longitude) {
                        destination.name = this.new_name;
                        destination.label = this.new_label;
                        destination.longitude = this.new_longitude;
                    }else if (this.new_name && this.new_latitude && this.new_longitude) {
                        destination.name = this.new_name;
                        destination.latitude = this.new_latitude;
                        destination.longitude = this.new_longitude;
                    }else if (this.new_label && this.new_latitude && this.new_longitude) {
                        destination.label = this.new_label;
                        destination.latitude = this.new_latitude;
                        destination.longitude = this.new_longitude;
                    }else if (this.new_name && this.new_label) {
                        destination.name = this.new_name;
                        destination.label = this.new_label;
                    }else if (this.new_name && this.new_latitude) {
                        destination.name = this.new_name;
                        destination.latitude = this.new_latitude;
                    }else if (this.new_name && this.new_longitude) {
                        destination.name = this.new_name;
                        destination.longitude = this.new_longitude;
                    }else if (this.new_label && this.new_latitude) {
                        destination.label = this.new_label;
                        destination.latitude = this.new_latitude;
                    }else if (this.new_label && this.new_longitude) {
                        destination.label = this.new_label;
                        destination.longitude = this.new_longitude;
                    }else if (this.new_latitude && this.new_longitude) {
                        destination.latitude = this.new_latitude;
                        destination.longitude = this.new_longitude;
                    }else if (this.new_name) {
                        destination.name = this.new_name;
                    }else if (this.new_label) {
                        destination.label = this.new_label;
                    }else if (this.new_latitude) {
                        destination.latitude = this.new_latitude;
                    }else if (this.new_longitude) {
                        destination.longitude = this.new_longitude;
                    }
                    destination.modifyDestination();

                }
            }
        };
    }
]);

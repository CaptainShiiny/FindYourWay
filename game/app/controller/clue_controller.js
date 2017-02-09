angular.module("findyourway").controller("ClueController", ["$scope", "$http","Clue",

        function($scope, $http, Clue){

            $scope.showClue = function(){
                return Clue.showClue;
            }

            $scope.$watch($scope.showClue, function(){

                //api_url+"/destinations/"+ id_dest + "/clues"
                $http.get(api_url+"/destinations/4/clues")
                .then(function(response){
                    var clues_tab = response.data[1].data;
                    var info ={};
                    
                    info.label = clues_tab.label;
                    info.destination_id = clues_tab.destination_id;
                    info.position = clues_tab.position;
                    console.log(info);
                }, function(error){
                    console.log(error);
                });

            })
        }]);
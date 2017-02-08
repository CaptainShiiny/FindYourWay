angular.module("backoffice").controller("CluesController",["$scope", "$http", "Clue",
    function($scope, $http, Clue){
        var url_api = "http://localhost/LP/FindYourWay/api/api.php";
        var localhost = "http://localhost/";

        //On affiche tous les indices
        $scope.showClues = function(){
            return Clue.showClues;
        }
        $scope.$watch($scope.showClues, function(newValue, oldValue){
            if (newValue) {
                var url = url_api+"/destinations/"+newValue['id']+"/clues/";
                $http.get(url).then(function(response){
                    $scope.parent_id = newValue['id'];
                    $scope.clues = [];
                    response.data[1].data.clues.forEach(function(data){
                        var info = {};
                        info.id = data.id;
                        info.label = data.label;
                        info.destination_id = data.destination_id;
                        info.position = data.position;
                        info.url = data.links.self;
                        var newClue = new Clue(info);
                        $scope.clues.push(newClue);
                    });
                },function(error){
                    console.log(error);
                });
            }
        });

        // On ajoute un indice
        $scope.add = function(){
            return Clue.add;
        }
        $scope.$watch($scope.add, function(newValue, oldValue){
            if (newValue) {
                var url = url_api+"/destinations/"+newValue[1]+"/clues/";
                $http.post(url, {
                        "label": newValue[0],
                        "position": newValue[2]
                    }).then(function(response){
                    $scope.refresh();
                    $scope.showAddForm = false;
                },function(error){
                    console.log(error);
                });
            }
        });

        // On supprime une destination
        $scope.deleteClue = function(){
            return Clue.deleteClue;
        }
        $scope.$watch($scope.deleteClue, function(newValue, oldValue){
            if (newValue) {
                var url = url_api+"/clues/"+newValue['id'];
                $http.delete(url).then(function(response){
                    $scope.refresh();
                },function(error){
                    console.log(error);
                });
            }
        });

        // On rafraîchit la page
        $scope.refresh = function(){
            $scope.$watch($scope.showClues, function(newValue, oldValue){
                if (newValue) {
                    var url = url_api+"/destinations/"+newValue['id']+"/clues/";
                    $http.get(url).then(function(response){
                        $scope.parent_id = newValue['id'];
                        $scope.clues = [];
                        response.data[1].data.clues.forEach(function(data){
                            var info = {};
                            info.id = data.id;
                            info.label = data.label;
                            info.destination_id = data.destination_id;
                            info.position = data.position;
                            info.url = data.links.self;
                            var newClue = new Clue(info);
                            $scope.clues.push(newClue);
                        });
                    },function(error){
                        console.log(error);
                    });
                }
            });
        }
    }
]);

angular.module("backoffice", []);
// var url_api = "http://localhost/LP/FindYourWay/api/api.php";
var url_api = "http://127.0.0.1:8080/edsa-lp_cisiie/ateliers/2/api/api.php";

// angular.module("backoffice").directive("authentification", ["$http",
//     function($http){
//         return{
//             restrict: "E",
//             templateUrl: "app/templates/authentification.html",
//             link: function($scope, element, attrs){
//                 $scope.auth = function(){
//                     $scope.login;
//                     $scope.pass;
//                     $http.get("", {
//                         "headers": {
//                             "Authorization": encode($scope.login+":"+$scope.pass),
//                             "Content-type": "application/x-www-urlencoded"
//                         }
//                     })
//                 }
//             }
//         };
//     }
// ]);

angular.module("backoffice", []);

var url_api = "http://findyourway.local/FindYourWay/api/api.php";

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

angular.module("findyourway").directive("game", [
    function(List){
        return{
            restrict: "E",
            templateUrl: "app/templates/game.html"
            link: function(scope, element, attrs){
                scope.displayForm = function(){
                    if(scope.task_name){
                        Task.addTask(scope.task_name, scope.parent_list.id);
                    }else{
                        Task.addTask($("#task_name").val(), scope.parent_list.id);
                    }
                }
            }
        };
    }
]);

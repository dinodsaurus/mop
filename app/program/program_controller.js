'use strict';

angular.module('mop-program',[])
    .controller('ProgramCtrl', function ($scope, $location) {
        $scope.page.title = "Program";
        $scope.page.bck = false;
        $scope.select(1);
        $scope.goTo = function(link){
            $location.path( link );
        }
    })
    .controller('ProgramSingle', function ($scope, $routeParams, programFac) {
        $scope.select(1);
        $scope.page.bck = true;
        $scope.page.title = "Program";
        var id = $routeParams.id,
            program = programFac.program;

        for(var i = 0; i < program.length; i++){
            if(program[i].id == id){
                $scope.program = program[i];
            }
        }
    });

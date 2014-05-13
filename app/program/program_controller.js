'use strict';

angular.module('mop-program',[])
    .controller('ProgramCtrl', function ($scope, $location) {
        $scope.goTo = function(link){
            $location.path( link );
        }
    })
    .controller('ProgramSingle', function ($scope, $routeParams, programFac) {
        var id = $routeParams.id,
            program = programFac.program;

        for(var i = 0; i < program.length; i++){
            if(program[i].id == id){
                $scope.program = program[i];
            }
        }
    });

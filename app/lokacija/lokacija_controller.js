'use strict';

angular.module('mop-lokacija',[])
    .controller('LokacijaCtrl', function ($scope, $log) {
        $scope.marker = function(id){
            //$scope.$emit('marker', id);
        }
    });

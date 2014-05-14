'use strict';

angular.module('mop-lokacija',[])
    .controller('LokacijaCtrl', function ($scope, $log) {
        $scope.select(5);
        $scope.page.title = "Lokacija";
        $scope.page.bck = false;
    });

'use strict';

angular.module('mop-kontakt',[])
    .controller('KontaktCtrl', function ($scope, $log) {
        $scope.select(7);
        $scope.page.title = "Kontakt";
        $scope.page.bck = false;
    });

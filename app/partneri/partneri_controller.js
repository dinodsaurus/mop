'use strict';

angular.module('mop-partneri',[])
    .controller('PartneriCtrl', function ($scope, $log) {
        $scope.select(6);
        $scope.page.title = "Partneri";
        $scope.page.bck = false;
    });

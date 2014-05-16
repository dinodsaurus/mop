'use strict';

angular.module('mop-onama',[])
    .controller('OnamaCtrl', function ($scope, $log) {
        $scope.select(4);
        $scope.page.title = "O nama";
        $scope.page.bck = false;
    });

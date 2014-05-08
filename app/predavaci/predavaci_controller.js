'use strict';

angular.module('mop-predavaci',[])
    .controller('PredavaciCtrl', function ($scope, $log, predavaciFac, $timeout) {
        $scope.gosti = predavaciFac.gosti;
        if(predavaciFac.gost){
            $scope.pageClass = 'gostAct';
            predavaciFac.gost = false;
            $timeout(function(){
                $scope.pageClass = '';
            },1000);
        }
    })
    .controller('PredavacCtrl', function ($scope, $log, predavaciFac, $timeout) {
        $scope.pageClass = 'gost';
        predavaciFac.gost = true;
        $scope.gosti = predavaciFac.gosti;
    });

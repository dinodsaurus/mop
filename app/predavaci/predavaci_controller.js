'use strict';

angular.module('mop-predavaci',[])
    .controller('PredavaciCtrl', function ($scope, predavaciFac ) {
        $scope.gosti = predavaciFac.gosti;
    })
    .controller('PredavacCtrl', function ($scope, predavaciFac, $routeParams, $window) {
        $scope.pageClass = 'gost';
        var id = parseInt($routeParams.id, 10);
        var gosti = predavaciFac.gosti;
        for(var i = 0; i < gosti.length; i++){
            if( id === gosti[i].id){
                $scope.gost = gosti[i];
            }
        }
        $scope.bck = function(){
            $window.history.back()
        }
    });

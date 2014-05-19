'use strict';

angular.module('mop-predavaci',[])
    .controller('PredavaciCtrl', function ($scope, predavaciFac ) {
        $scope.page.title = "Gosti";
        $scope.page.bck = false;
        $scope.gosti = predavaciFac.gosti;
        $scope.select(2);
    })
    .controller('PredavacCtrl', function ($scope, predavaciFac, $routeParams) {
        $scope.page.title = "Gosti";
        $scope.page.bck = true;
        $scope.select(2);
        $scope.page.title = "Gosti";
        var id = parseInt($routeParams.id, 10),
            gosti = predavaciFac.gosti;
        for(var i = 0; i < gosti.length; i++){
            if( id === gosti[i].id){
                $scope.gost = gosti[i];
            }
        }
        $scope.bck = function(){
            $location.path('/predavaci');
        }
    });

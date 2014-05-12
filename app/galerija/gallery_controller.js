'use strict';

angular.module('mop-galerija',[])
    .controller('GalerijaCtrl', function ($scope, $log, galerijaFac) {
        var insta = galerijaFac.instagram("imputmop");
        insta.get().then(function(data){
            $scope.images = data.data;
        })
    });

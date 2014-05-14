'use strict';

angular.module('mop-galerija',[])
    .controller('GalerijaCtrl', function ($scope, $log, galerijaFac) {
        $scope.select(3);
        var insta = galerijaFac.instagram("imputmop");
        insta.get().then(function(data){
            $log.info(data);
            $scope.images = data.data;
        })
    });

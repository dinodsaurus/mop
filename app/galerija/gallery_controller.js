'use strict';

angular.module('mop-galerija',[])
    .controller('GalerijaCtrl', function ($scope, $log, galerijaFac) {
        galerijaFac.instagram("imputmop").then(function(){

        });
    });

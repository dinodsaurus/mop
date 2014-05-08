https://api.instagram.com/v1/tags/imputmop/media/recent
    'use strict';

angular.module('mop-galerija')
    .factory("galerijaFac", function ($http,$q) {
        var instagram = function(tag){
            var deferred = $q.defer();
            var tag = tag;
            if(!tag){
                tag = "jourek";
            }
            $http({method: 'GET', url: 'https://api.instagram.com/v1/tags/' + tag + '/media/recent' + APIKEY}).
                success(function(data) {
                    deferred.resolve(data);
                }).
                error(function(data) {
                    deferred.reject(data);
                });
            return deferred.promise;
        }

        return {
            instagram: instagram
        };
    });

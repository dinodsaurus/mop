'use strict';

angular.module('mop-galerija')
    .factory("galerijaFac", function ($http,$q) {
        var instagram = function(tag){
            return {
                'get': function() {
                    var base = "https://api.instagram.com/v1";
                    var request = '/tags/' + tag + '/media/recent';
                    var clientId = '036e1503210046a59931ed2cbcf2924d';

                    var url = base + request;
                    var config = {
                        'params': {
                            'client_id': clientId,
                            'count': 60,
                            'callback': 'JSON_CALLBACK'
                        }
                    };
                    return $http.jsonp(url, config);
                }
            };
        };

        return {
            instagram: instagram
        };
    });

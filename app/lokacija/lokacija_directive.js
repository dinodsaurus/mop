angular.module('mop-lokacija')
.directive('map', function ($window) {
    return {
        restrict: 'A',
        link: function (scope, element) {
            var mapOptions,
            style = [{

                featureType: "poi.business",

                elementType: "labels",

                stylers: [

                    { visibility: "off" }

                ]

            },{"featureType":"water","stylers":[{"color":"#021019"}]},{"featureType":"landscape","stylers":[{"color":"#08304b"}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#0c4152"},{"lightness":5}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#000000"}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#0b434f"},{"lightness":25}]},{"featureType":"road.arterial","elementType":"geometry.fill","stylers":[{"color":"#000000"}]},{"featureType":"road.arterial","elementType":"geometry.stroke","stylers":[{"color":"#0b3d51"},{"lightness":16}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#000000"}]},{"elementType":"labels.text.fill","stylers":[{"color":"#ffffff"}]},{"elementType":"labels.text.stroke","stylers":[{"color":"#000000"},{"lightness":13}]},{"featureType":"transit","stylers":[{"color":"#146474"}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#000000"}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#144b53"},{"lightness":14},{"weight":1.4}]}];
            var zoom = 16;
            if($window.innerWidth < 699){
                zoom = 14;
            }
            var mapOptions = {
                center: new google.maps.LatLng(46.3078, 16.3394),
                zoom: zoom,
                styles: style,
                scrollwheel: false
            };
            var map = new google.maps.Map(element[0],
                mapOptions);
            var markers = [];
            markers.push(new google.maps.Marker({
                map: map,
                position: new google.maps.LatLng(46.3078, 16.336),
                icon: "/img/pointer.png"
                })
            );
            markers.push(new google.maps.Marker({
                    map: map,
                    position: new google.maps.LatLng(46.3056, 16.3378),
                    icon: "/img/pointer.png"
                })
            );
            markers.push(new google.maps.Marker({
                    map: map,
                    position: new google.maps.LatLng(46.3097, 16.3341),
                    icon: "/img/pointer.png"
                })
            );
            markers.push(new google.maps.Marker({
                    map: map,
                    position: new google.maps.LatLng(46.306, 16.3462),
                    icon: "/img/pointer.png"
                })
            );


            for(var i = 0; i < markers.length; i++){
                var cont = "Palača Herzer, Franjevački trg 6";

                if(i === 1){
                    var cont = "Scena & Bar Rogoz, Augusta Cesarca 1";
                }
                if(i === 2){
                    cont = "Stari grad, Strossmayerovo šetalište 7"
                }
                if(i === 3){
                    cont = "Hotel Varaždin, Kolodvorska 19"
                }
                markers[i]['infowindow'] = new google.maps.InfoWindow({
                    content: cont
                });
                google.maps.event.addListener(markers[i], 'click', function() {
                    this['infowindow'].open(map, this);
                });
            }
            scope.$on('marker', function(event, data) {
                console.log(data);
                google.maps.event.trigger(markers[data], 'click');
            });

            //google.maps.event.trigger(marker, 'click');
        }
    };
});
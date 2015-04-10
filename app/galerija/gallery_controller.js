'use strict';

angular.module('mop-galerija',[])
    .controller('GalerijaCtrl', function ($scope, $log, galerijaFac) {
        $scope.page.title = "Galerija";
        $scope.page.bck = false;
        $scope.select(3);
        $scope.images = [];
        var insta = galerijaFac.instagram("mopfest");
        insta.get().then(function(data){
            $scope.images = [];
            var images = data.data.data;
            var date = String(new Date(2014, 6, 1).valueOf());
            date = date.slice(0,-3);
            for(var i=0; i<images.length; i++){
              var image = images[i];
              var imgDate = image.created_time;
              console.log(imgDate);
              console.log(date);
              if(imgDate < date){
                console.log("starije", image);
                $scope.images.push(image);
              }
            }
        });
    });

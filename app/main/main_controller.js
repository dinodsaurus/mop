'use strict';

angular.module('mop-main',['ngRoute','ngAnimate'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'main/main.html',
        controller: 'MainCtrl'
      });
  })
  .controller('MainCtrl', function ($scope, $log) {
    $scope.navigation = false;
    $scope.nav = [
        {
            name:"About"
        },
        {
            name:"People"
        },
        {
            name:"Instagram"
        }
    ];
    $scope.showMenu = function(){
        $log.info("clicked");
        $scope.navigation = !$scope.navigation;
    }
  });

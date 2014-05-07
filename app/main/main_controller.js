'use strict';

angular.module('mop-main',['ngRoute','ngAnimate','mop-predavaci','mop-program'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'main/main.html',
        controller: 'RootCtrl'
      })
      .when('/predavaci', {
        templateUrl: 'predavaci/predavaci.html',
        controller: 'PredavaciCtrl'
      })
      .when('/program', {
        templateUrl: 'program/program.html',
        controller: 'ProgramCtrl'
      });
  })
  .controller('RootCtrl', function ($scope, $log) {
        var rand = Math.floor(Math.random()*5 + 1);
        $log.info(rand);
        $scope.class = "bck" + rand;
  })
  .controller('MainCtrl', function ($scope, $log) {
    $scope.showNav = false;
    $scope.selected = 0;
    $scope.navigation = [
        {
            path: "/",
            name: "Naslovna"
        },
        {
            path: "#/program",
            name: "Program"
        },
        {
            path: "#/predavaci",
            name: "Predavači"
        },
        {
            path: "#/galerija",
            name: "Galerija"
        },
        {
            path: "#/onama",
            name: "O nama"
        },
        {
            path: "#/lokacja",
            name: "Lokacija"
        },
        {
            path: "#/partneri",
            name: "Partneri"
        },
        {
            path: "#/kontakt",
            name: "Kontakt"
        }
    ];
    $scope.select= function(index) {
        $scope.selected = index;
    };
    $scope.showMenu = function(){
        $scope.showNav = !$scope.showNav;
    }
  });

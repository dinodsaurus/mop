'use strict';

angular.module('mop-main',['ngRoute','ngAnimate','mop-predavaci','mop-program','mop-galerija','mop-lokacija','mop-kontakt'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/naslovna', {
        templateUrl: 'main/main.html',
        controller: 'RootCtrl'
      })
      .when('/gosti', {
        templateUrl: 'predavaci/predavaci.html',
        controller: 'PredavaciCtrl'
      })
      .when('/gosti/:id/', {
        templateUrl:'predavaci/gost.html',
        controller: 'PredavacCtrl'
      })
      .when('/program', {
        templateUrl: 'program/program.html',
        controller: 'ProgramCtrl'
      })
      .when('/program/:id/', {
        templateUrl:'program/programSing.html',
        controller: 'ProgramSingle'
      })
      .when('/galerija', {
        templateUrl:'galerija/galerija.html',
        controller: 'GalerijaCtrl'
      })
      .when('/lokacija', {
        templateUrl:'lokacija/lokacija.html',
        controller: 'LokacijaCtrl'
      })
      .when('/kontakt', {
        templateUrl:'kontakt/kontakt.html',
      })
      .when('/onama', {
        templateUrl:'onama/onama.html',
      });
  })
  .controller('RootCtrl', function ($scope) {
        var rand = Math.floor(Math.random()*5 + 1);
        $scope.class = "bck" + rand;
  })
  .controller('MainCtrl', function ($scope) {
    $scope.showNav = false;
    $scope.selected = 0;
    $scope.navigation = [
        {
            path: "#/naslovna",
            name: "Naslovna"
        },
        {
            path: "#/program",
            name: "Program"
        },
        {
            path: "#/gosti",
            name: "Gosti"
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
            path: "#/lokacija",
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
    })
    .directive('click', function ($timeout) {
        return {
            restrict: 'A',
            link: function (scope, element) {
                $timeout(function(){
                    element[0].click();
                },1);

            }
    }
});

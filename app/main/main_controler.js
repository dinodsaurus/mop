'use strict';

angular.module('mop-main',['ngRoute','ngAnimate','mop-predavaci','mop-program','mop-galerija','mop-lokacija','mop-kontakt','mop-onama','mop-partneri'])
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
                controller: 'KontaktCtrl'
            })
            .when('/onama', {
                templateUrl:'onama/onama.html',
                controller: 'OnamaCtrl'
            })
            .when('/partneri', {
                templateUrl:'partneri/partneri.html',
                controller: 'PartneriCtrl'
            });
    })
    .controller('RootCtrl', function ($scope) {
        var rand = Math.floor(Math.random()*5 + 1);
        $scope.class = "bck" + rand;
        $scope.page.title = "O nama";
        $scope.page.bck = false;
        $scope.selected = 0;

    })
    .controller('MainCtrl', function ($scope, $window) {

        $scope.page = {};
        $scope.showNav = true;
        $scope.mobileNav = false;
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
        $scope.showMenu = function(mobile){
            if(mobile){
                $scope.mobileNav = !$scope.mobileNav;
            }else{
                $scope.showNav = !$scope.showNav;
            }
        }
        $scope.mobileBck = function(){
            $window.history.back();
        }
    })
    .directive('scrollup', function ($document) {
        return {
            restrict: 'A',
            link: function (scope, elm, attrs) {
                elm.bind("click", function () {
                    $document[0].body.scrollTop = 0;
                });
            }
        };
    });

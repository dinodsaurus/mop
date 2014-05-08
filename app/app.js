'use strict';

angular.module('mop', [ 'ngRoute','mop-main','templates' ])
  .config(function ($routeProvider) {
    $routeProvider
      .otherwise({
        redirectTo: '/naslovna'
      });
  });
'use strict';

var app = angular.module('app', []);

app.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'views/main.html',
      controller: CountdownCtrl
    })
    .otherwise({
      redirectTo: '/'
    });
});

'use strict';

var app = angular.module('app', []);

app.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'views/main.html',
      controller: CountdownCtrl
    })
    .otherwise({
      redirectTo: '/'
    });
}]);

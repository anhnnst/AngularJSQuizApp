'use strict';

angular.module('myApp.error', ['ngRoute'])
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/404', {
            templateUrl: 'views/errors/404.html',
        });
    }]);

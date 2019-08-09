'use strict';

angular.module('myApp.about', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/aboutUs', {
            templateUrl: 'views/about/about-us.html',
        });
    }]);

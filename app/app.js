'use strict';

// Declare app level module which depends on views, and core components
angular.module('myApp', [
    'ngRoute',
    'ui.bootstrap',
    'myApp.about',
    'myApp.error',
    'myApp.subject',
    'myApp.quiz',
    'myApp.student',
    'myApp.nav'
]).config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!');

    $routeProvider.otherwise({redirectTo: '/aboutUs'});
}]);

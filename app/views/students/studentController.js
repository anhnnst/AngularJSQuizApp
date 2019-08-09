'use strict';

angular.module('myApp.student', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/listStudents', {
            templateUrl: 'views/students/list.html',
            controller: 'StudentCtrl',
            resolve: {
                initialData: (studentFactory) => {
                    return studentFactory.getStudents();
                }
            }
        });
    }])
    .controller('StudentCtrl', ['studentFactory','$scope', function ( studentFactory, $scope) {
        $scope.students = studentFactory.getList();
    }]);

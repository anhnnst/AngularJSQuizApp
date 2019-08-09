'use strict';

angular.module('myApp.subject', ['ngRoute','ui.bootstrap'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/listSubjects', {
            templateUrl: 'views/subjects/list.html',
            controller: 'SubjectCtrl',
            resolve: {
                initialData: (subjectFactory) => {
                    return subjectFactory.getSubjects();
                }
            }
        });
    }])
    .controller('SubjectCtrl', ['subjectFactory','$scope',function (subjectFactory, $scope) {
        $scope.subjects = subjectFactory.getList();

        $scope.viewby = 6;
        $scope.totalItems = $scope.subjects.length;
        $scope.currentPage = 1;
        $scope.itemsPerPage = $scope.viewby;
        $scope.maxSize = 5; //Number of pager buttons to show

        $scope.setPage = function (pageNo) {
            $scope.currentPage = pageNo;
        };

        $scope.pageChanged = function() {
            console.log('Page changed to: ' + $scope.currentPage);
        };

        $scope.setItemsPerPage = function(num) {
            $scope.itemsPerPage = num;
            $scope.currentPage = 1; //reset to first page
        }
    }]);
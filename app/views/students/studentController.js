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
        }).when('/login',{
            templateUrl: 'views/students/login.html',
            controller: 'LoginCtrl'
        }).when('/logout',{
            templateUrl: 'views/students/logout.html',
            controller: 'LogoutCtrl'
        });
    }])
    .controller('StudentCtrl', ['studentFactory','$scope', function ( studentFactory, $scope) {
        $scope.students = studentFactory.getList();
    }])
    .controller('LoginCtrl', ['studentFactory','$scope','$location', function ( studentFactory, $scope, $location) {
        $scope.loginForm = {};
        $scope.errorMessage = null;

        $scope.checkLogin=()=>{
            studentFactory.checkLogin($scope.loginForm.username, $scope.loginForm.password).then(data => {
                if (data != null && data.length>0){
                    studentFactory.setIsLogin(true);
                    $location.path('/');
                    $scope.errorMessage = null;
                }else{
                    studentFactory.setIsLogin(false);
                    $scope.errorMessage = "Invalid username or password";
                }

            });
        };
    }])
    .controller('LogoutCtrl', ['studentFactory','$scope','$location', function ( studentFactory, $scope, $location) {
        $scope.logout = ()=>{
            studentFactory.setIsLogin(false);
            $location.path('/');
        };
        $scope.cancelLogout = ()=>{
            $location.path('/');
        };
    }]);


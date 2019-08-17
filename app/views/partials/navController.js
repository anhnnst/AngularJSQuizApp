'use strict';

angular.module('myApp.nav', [])
    .controller('NavCtrl', ['studentFactory','$scope', function ( studentFactory, $scope) {
        $scope.isLogin =()=>{
            return studentFactory.getIsLogin();
        };
    }]);

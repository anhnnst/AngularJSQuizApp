'use strict';
angular.module('myApp')
    .factory('studentFactory',['$http', function ($http) {
        var studentFactory = {};
        var list =[];
        var self = this;

        studentFactory.getStudents=function(){
            console.log("Test ");
            var promise = $http.get('db/Students.json').then(response => {
                list = response.data;
                //console.log(response.data);
                return list;
            }).catch(reason => alert(reason));

            return promise;
        };
        studentFactory.getList=function () {
            console.log('Get List Function');
            console.log(list);
            return list;
        };

        return studentFactory;
    }]);
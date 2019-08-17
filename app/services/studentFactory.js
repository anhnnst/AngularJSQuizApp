'use strict';
angular.module('myApp')
    .factory('studentFactory',['$http', function ($http) {
        var studentFactory = {};
        var list =[];
        var isLogin = false;
        var self = this;

        studentFactory.getIsLogin=()=>{
            return isLogin;
        };
        studentFactory.setIsLogin =(value)=>{
            isLogin = value;
        }

        studentFactory.checkLogin=(username, password)=>{
            var promise = studentFactory.getStudents().then((data)=>{
                var students = data.filter(item=>{
                    return item.username === username && item.password === password;
                });
                return students;
            });

            return promise;
        }

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
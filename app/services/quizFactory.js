'use strict';
angular.module('myApp')
    .factory('quizFactory',['$http', function ($http) {
        var quizFactory = {};
        var list =[];
        var self = this;

        quizFactory.getQuestions =function(subjectCode){
            console.log("Test Questions");
            var promise = $http.get('db/Quizs/' + subjectCode +".js").then(response => {
                list = response.data;
                console.log(response.data);
                return list;
            }).catch(reason => alert(reason));

            return promise;
        };

        quizFactory.getQuestion = function (index) {
            if (list.length <= 0 || index >= list.length)
                return null;
            return list.slice(index, 1);
        }
        
        return quizFactory;
    }]);
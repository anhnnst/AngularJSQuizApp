'use strict';

angular.module('myApp.quiz', ['ngRoute','ui.bootstrap'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/takeQuiz/:subjectCode', {
            templateUrl: 'views/quizs/quiz.html',
            controller: 'QuizCtrl',
        });
    }])
    .controller('QuizCtrl', ['quizFactory','$scope','$routeParams','$interval',function (quizFactory, $scope, $routeParams,$interval) {
        console.log('Quiz controller')
        $scope.currentQuestion = 0;
        $scope.questions=[];
        $scope.time = 60;
        $scope.quizMarks = 0;
        $scope.answer = '';

        var stop = $interval(()=>{$scope.time --}, 1000);
        quizFactory.getQuestions($routeParams.subjectCode).then((data)=>{
            $scope.questions = data;
        });

        $scope.question = () => {
            return $scope.questions[$scope.currentQuestion];
        };
        $scope.setQuestionIndex = (newIndex)=>{
            if ($scope.answer === $scope.question().AnswerId){
                $scope.quizMarks += $scope.question().Marks;
            }

            $scope.currentQuestion = newIndex;

            return $scope.currentQuestion;
        };
        $scope.questionTotal = ()=>{
            return $scope.questions.length;
        }
        $scope.sumup = false;
        $scope.submitQuiz = ()=>{
            $scope.sumup = true;
            $interval.cancel(stop);
        }
    }]);

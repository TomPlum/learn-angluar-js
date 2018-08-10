'use strict';

angular.module('myApp.questions', ['ngRoute']).config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/questions', {
        templateUrl: 'questions/questions.html',
        controller: 'QuestionsController'
    });
}]).controller('QuestionsController', ["$scope", function($scope) {
    $scope.data = {};

    $scope.submit = function() {
        alert("You answered: " + data.questionOne + ", " + data.questionTwo);
    }
}]);
'use strict';

/**
 * @ngdoc function
 * @name gpascualyWebappApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the gpascualyWebappApp
 */
angular.module('gpascualyWebappApp')
  .controller('ProjectsCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });

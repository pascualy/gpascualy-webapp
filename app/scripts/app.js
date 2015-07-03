'use strict';

/**
 * @ngdoc overview
 * @name gpascualyWebappApp
 * @description
 * # gpascualyWebappApp
 *
 * Main module of the application.
 */
angular
  .module('gpascualyWebappApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/projects', {
        templateUrl: 'views/projects.html',
        controller: 'ProjectsCtrl'
      })
      .when('/cv', {
        templateUrl: 'views/cv.html',
        controller: 'CVCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

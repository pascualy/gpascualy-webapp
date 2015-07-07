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
        templateUrl: 'views/projects_index.html',
        controller: 'ProjectsCtrl'
      })
      .when('/projects/ros', {
        templateUrl: 'views/projects/ros.html',
        controller: 'ROSCtrl'
      })
      .when('/projects/umlaut', {
        templateUrl: 'views/projects/umlaut.html',
        controller: 'UmlautCtrl'
      })
      .when('/projects/knobull', {
        templateUrl: 'views/projects/knobull.html',
        controller: 'KnobullCtrl'
      })
      .when('/projects/kawasaki', {
        templateUrl: 'views/projects/kawasaki.html',
        controller: 'KawasakiCtrl'
      })
      .when('/projects/vivace', {
        templateUrl: 'views/projects/vivace.html',
        controller: 'VivaceCtrl'
      })
      .when('/projects/devoworm', {
        templateUrl: 'views/projects/devoworm.html',
        controller: 'DevoWormCtrl'
      })
      .when('/projects/ceramics', {
        templateUrl: 'views/projects/ceramics.html',
        controller: 'CeramicsCtrl'
      })
      .when('/projects/bbq', {
        templateUrl: 'views/projects/bbq.html',
        controller: 'CeramicsCtrl'
      })
      .when('/projects/webapp', {
        templateUrl: 'views/projects/webapp.html',
        controller: 'WebAppCtrl'
      })
      .when('/cv', {
        templateUrl: 'views/cv.html',
        controller: 'CVCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

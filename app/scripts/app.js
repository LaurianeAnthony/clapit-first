'use strict';

/**
 * @ngdoc overview
 * @name clapItApp
 * @description
 * # clapItApp
 *
 * Main module of the application.
 */
angular
  .module('clapItApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.sortable',
    'LocalStorageModule'
  ])
  .config(['localStorageServiceProvider', function(localStorageServiceProvider){
    localStorageServiceProvider.setPrefix('ls');
  }])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/index.html',
        controller: 'MainCtrl'
      })
      .when('/project', {
        templateUrl: 'views/project/project.html',
        controller: 'ProjectCtrl'
      })
      .when('/project:projectId', {
        templateUrl: 'views/project/project-detail.html',
        controller: 'ProjectDetailCtrl'
      })
      .when('/option', {
        templateUrl: 'views/page/option.html',
        controller: 'OptionCtrl'
      })
      .when('/about', {
        templateUrl: 'views/page/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

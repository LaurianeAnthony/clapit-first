'use strict';

/**
 * @ngdoc function
 * @name clapItApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the clapItApp
 */
angular.module('clapItApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });

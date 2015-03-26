'use strict';

/**
 * @ngdoc function
 * @name clapItApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the clapItApp
 */
var app = angular.module('clapItApp');
app.controller('AboutCtrl', function ($scope, TestFactory) {
    $scope.tests = TestFactory.initTests().then(function(tests){
      $scope.tests = tests;
    }, function(msg){
      alert(msg);
    });


  });

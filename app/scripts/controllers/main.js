'use strict';

/**
 * @ngdoc function
 * @name clapItApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the clapItApp
 */
angular.module('clapItApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
  
angular.module('clapItApp')
  .controller('ProjectCtrl', function ($scope, localStorageService) {
    
    var projectsInStore = localStorageService.get('projects');

    $scope.projects = projectsInStore || [];

    $scope.$watch('projects', function () {
      localStorageService.set('projects', $scope.projects);
    }, true);

    $scope.addProject = function() {
      $scope.projects.push($scope.project);
      $scope.project=('');
    };

    $scope.removeProject= function(index) {
      $scope.projects.splice(index, 1);
    };
  });

angular.module('clapItApp')
  .controller('ProjectDetailCtrl', ['$scope', '$routeParams', 'localStorageService', 
  function($scope, $routeParams, localStorageService) {

    var projects = localStorageService.get('projects');

    var projectId = $routeParams.projectId;
    $scope.projectId = projectId.split(':')[1];

    $scope.project= projects[$scope.projectId];



    $scope.removeProject= function(index) {
      
      //console.log(projects);
     /* */
      //console.log(localStorage.key(0));

      projects.splice(index, 1);
      localStorage.clear();
      localStorageService.set('projects', projects);

      
    };

  }]); 
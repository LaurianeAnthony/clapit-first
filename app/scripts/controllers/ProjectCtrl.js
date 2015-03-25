'use strict';

var app = angular.module('clapItApp');
app.controller('ProjectCtrl', function ($scope, ProjectsFactory) {
    
    // Init projects with projects in localStorage    
    $scope.projects = ProjectsFactory.getProjects();

    // Watch change of projects and automatically update in localStorage
    $scope.$watch('projects', function () {
      ProjectsFactory.saveProject($scope.projects);
    }, true);

    // Option for ui-sortable : add button for draggable option
    $scope.sortableOptions = {
      handle: '.itemProject .toolBar',
    };

    // Add new project
    $scope.addProject = function() {
      $scope.projects.push($scope.project);
      $scope.project=('');
    };

    // Remove a project
    $scope.removeProject= function(index) {
      $scope.projects.splice(index, 1);
    };

  });
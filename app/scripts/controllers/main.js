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
    
    // Init projects with projects in localStorage
    $scope.projects = getData('projects', localStorageService);

    // Watch change of projects and automatically update in localStorage
    $scope.$watch('projects', function () {
      saveData('projects', $scope.projects, localStorageService);
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

angular.module('clapItApp')
  .controller('ProjectDetailCtrl', ['$scope', '$routeParams', 'localStorageService', '$location',
  function($scope, $routeParams, localStorageService, $location) {

    // Init projects with projects in localStorage
    $scope.projects = getData('projects', localStorageService);

    $scope.$watch('projects', function () {
      saveData('projects', $scope.projects, localStorageService);
    }, true);


    // Find detail for the current project (by id)
    var projectId = $routeParams.projectId;
    $scope.projectId = projectId.split(':')[1];
    $scope.project= $scope.projects[$scope.projectId];

    // Remove a project and redirect to project page
    $scope.removeProject= function(index) {
      $scope.projects.splice(index, 1);
      $location.path('/project');
    };

    
    /******* Add List ******/
      // Structure of input for person in lists
      $scope.personArray = [{
        name: '',
        fonction: ''
      }];
      $scope.addNewLines = function() {
        $scope.personArray.push({name: '', fonction: ''});
      };

      // Structure of select list
      $scope.lists = [
        { name: 'Equipe technique',value: 'technique'},
        { name: 'Comédiens', value: 'actor'},
        { name: 'Administratif', value: 'admin'},
      ];

      // Save list
      $scope.addList = function() {
        var name = $scope.project.name;
        var description = $scope.project.description;
        var listTech = $scope.project.listTechnique;
        var listAct = $scope.project.listComedien;
        var listAdmin = $scope.project.listAdministration;

        switch($scope.list){
          case 'technique':
            $scope.project = {
              name : name,
              description : description,
              listComedien : listAct,
              listTechnique : {
                listName: 'Equipe technique',
                list: $scope.personArray
              },
              listAdministration : listAdmin
            };
          break;
          case 'actor':
            $scope.project = {
              name : name,
              description : description,
              listComedien : {
                listName: 'Comédiens',
                list: $scope.personArray
              },
              listTechnique : listTech,
              listAdministration : listAdmin
            };
          break;
          case 'admin':
            $scope.project = {
              name : name,
              description : description,
              listComedien : listAct,
              listTechnique : listTech,
              listAdministration : {
                listName: 'Administratif',
                list: $scope.personArray
              }
            };
          break;
        }
        
        $scope.projects[$scope.projectId]=$scope.project;

        $scope.personArray=[];
        $('#addListForm').addClass('ng-hide');
      };

      



  }]); 

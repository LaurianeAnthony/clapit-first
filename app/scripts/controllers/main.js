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

    // Show project by id
    var projectId = $routeParams.projectId;
    $scope.projectId = projectId.split(':')[1];

    $scope.project= projects[$scope.projectId];


    $scope.removeProject= function(index) {
      projects.splice(index, 1);
      localStorage.clear();
      localStorageService.set('projects', projects);
    };
    

    $scope.personArray = [{
      name: '',
      fonction: ''
    }];
    $scope.addNewLines = function() {
      $scope.personArray.push({name: '', fonction: ''});
    };

    $scope.lists = [
      {name: 'Equipe technique',
      value: 'technique'},
      {name: 'Comédiens',
      value: 'actor'},
      {name: 'Nouvelle liste',
      value: 'new'},
    ];


    $scope.addList = function() {
      var name = $scope.project.name;
      var description = $scope.project.description;

      $scope.project = {
        name: name,
        description: description,
        listType: {
          listName: $scope.list,
          list: $scope.personArray
        }
      };
      angular.forEach(projects, function(value, key){

        if (key == $scope.projectId)  {
          projects[key]= $scope.project;
        }
      });
      console.log(projects);

      localStorage.clear();
      localStorageService.set('projects', projects);


      
    };



  }]); 

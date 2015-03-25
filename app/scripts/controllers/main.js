'use strict';

/**
 * @ngdoc function
 * @name clapItApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the clapItApp
 */


var app = angular.module('clapItApp');
app.controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
  
app.factory('ProjectsFactory', function(localStorageService) {
  var factory = { 
    projects : false,
    getProjects : function(){
      var projectsInStore = localStorageService.get("projects");
      return projectsInStore || [];

      //return factory.posts;
    },
    /*getProject : function(id){
      var project = {};
      angular.forEach(factory.getProjects(), function(value, key){
        if (value.id == id)
          project = value
        console.log(value);
      })
      return project;
    },*/
    saveProject : function(value){
      localStorageService.set('projects', value, localStorageService);
      return factory.projects;
    }
  }
  return factory;
});

app.factory('ListsFactory', function(localStorageService) {
  var factory = { 
    lists : false,
    getLists : function(){
      var listsInStore = localStorageService.get("lists");
      return listsInStore || [];
    },
    saveList : function(value){
      localStorageService.set('lists', value, localStorageService);
      return factory.lists;
    }
  }
  return factory;
})

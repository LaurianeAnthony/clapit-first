'use strict';

var app = angular.module('clapItApp');
app.controller('OptionCtrl', function ($scope, ListsFactory) {
    
    $scope.lists = ListsFactory.getLists();

    $scope.$watch('lists', function () {
      ListsFactory.saveList($scope.lists);
    }, true);


    

    $scope.removeList = function(index){
      $scope.lists.splice(index, 1);
    };


    $scope.addTypeList = function(val){
        
      // Create the new list type
      var newTypeList = {
        'name' : val,
        'value' : slugFromString(val),
      };        

      // Delete the last option (which is "new")
      $scope.lists.pop();
      $scope.lists.push(newTypeList);

      // Init selected value in select
      $scope.list=newTypeList.value;
      
      // Add the last option (which is "new")
      addNewOption($scope.lists);


      // Init the input form for adding new type list
      $scope.newListName=[];
      //saveData('lists', $scope.lists, localStorageService);
    };


  });





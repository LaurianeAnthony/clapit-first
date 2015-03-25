'use strict';

var app = angular.module('clapItApp');
app.controller('ProjectDetailCtrl', function ($scope, $routeParams, $location, ProjectsFactory, ListsFactory) {

    /*** INIT DATA ***/

    // Init projects with projects in localStorage
    $scope.projects = ProjectsFactory.getProjects();
    
    // Find detail for the current project (by id)
    //var projectId = $routeParams.projectId;
    var projectId = $routeParams.projectId.split(':')[1];
    $scope.project= $scope.projects[projectId];

    // Structure of input for person in lists
    $scope.personArray = initPersonArray();

    // Structure of select list
    //$scope.lists = getData('lists', localStorageService);
    $scope.lists = ListsFactory.getLists();
        
    // Add the last option (which is "new")
    addNewOption($scope.lists, true);


    /**** WATCH function ***/

    $scope.$watch('projects', function () {
      ProjectsFactory.saveProject($scope.projects);
      
      // Create list of lists to show on view (update with projects)
      $scope.listsProject = [];
      angular.forEach($scope.lists, function(value){
        var currentVal = value.value;
        if($scope.project[currentVal]) $scope.listsProject.push($scope.project[currentVal]);
      })
    }, true);

    $scope.$watch('lists', function() {
      ListsFactory.saveList($scope.lists);
    }, true);


    /*** PLUG-IN option ***/

    // Option for ui-sortable : add button for draggable option
    $scope.sortableOptions = {
      handle: '.myHandle',
    };


    /*** FUNCTION ***/

    // Remove a project and redirect to project page
    $scope.removeProject= function(index) {
      $scope.projects.splice(index, 1);
      $location.path('/project');
    };

    $scope.addNewLines = function() {
      $scope.personArray.push({name: '', fonction: ''});
    };
 

    // Save list
    $scope.addList = function() {
      var currentListName;
      //var currentListTag= "list_"+ $scope.list;

      angular.forEach($scope.lists, function(value) {
        if($scope.list === value.value){
          currentListName = value.name;
        }
      });
       
      $scope.personArrayClean = cleanArray($scope.personArray);

      if ($scope.personArrayClean.length>0) {

        $scope.project[$scope.list]= {
            listName: currentListName,
            list: $scope.personArrayClean
        };
        
        $scope.projects[projectId]=$scope.project;

        $scope.personArray = initPersonArray();
        $('#addListForm').addClass('ng-hide');
        $scope.showAddList= false;
      } else {
        $scope.msgError = "Veuillez entrer au moins une personne et remplir tous les champs";
      }
      
    };

    // Watch when select change to take the moment when "new" is selected
    $scope.onChangeTypeList = function(){
      if($scope.list === "new"){
        $scope.addNewTypeList = true;
      } else 
        $scope.addNewTypeList = false;
    };
    
    $scope.addnewTypeList = function(){
      
      // Create the new list type
      var newTypeList = {
        'name' : $scope.newTypeList,
        'value' : slugFromString($scope.newTypeList),
      };        

      // Delete the last option (which is "new")
      $scope.lists.pop();
      $scope.lists.push(newTypeList);

      // Init selected value in select
      $scope.list=newTypeList.value;
      
      // Add the last option (which is "new")
      addNewOption($scope.lists);


      // Hide and init the input form for adding new type list
      $scope.addNewTypeList = false;
      $scope.newTypeList=[];
      //saveData('lists', $scope.lists, localStorageService);
    };



  }); 
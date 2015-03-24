'use strict';

function getData(key, localStorageService){
    var projectsInStore = localStorageService.get(key);
    return projectsInStore || [];
}

function saveData(key, value, localStorageService){
  localStorage.clear();
  localStorageService.set(key, value);
}
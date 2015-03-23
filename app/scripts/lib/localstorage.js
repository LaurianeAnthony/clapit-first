'use strict';

function getLocalStorage(key, localStorageService){
    var projectsInStore = localStorageService.get(key);
    return projectsInStore || [];
}

function saveLocalStorage(key, value, localStorageService){
  localStorage.clear();
  localStorageService.set(key, value);
}
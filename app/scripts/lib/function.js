'use strict';

function cleanArray(actual){
  var newArray = new Array();
  for(var i = 0; i<actual.length; i++){
    if (actual[i].fonction && actual[i].name){
      newArray.push(actual[i]);
    }
  }
  return newArray;
}

function initPersonArray(){
	var personArray = [{
    name: '',
    fonction: ''
  }];
  return personArray;
}

function addNewOption(array, pop){
	if (pop === true)
		array.pop();
	array.push({ name: 'New list', value: 'new'});
}

function slugFromString(str){
  var $slug = '';
  var trimmed = $.trim(str);
  $slug = trimmed.replace(/[^a-z0-9-]/gi, '_').
  replace(/-+/g, '_').
  replace(/^-|-$/g, '');
  return $slug.toLowerCase();
}

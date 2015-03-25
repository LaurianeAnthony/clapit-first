'use strict';

/**
 * @ngdoc function
 * @name clapItApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the clapItApp
 */
var app = angular.module('clapItApp');
app.controller('AboutCtrl', function ($scope, ProjectsFactory) {
     $scope.projects = ProjectsFactory.getProjects();

     //$scope.projects = [{"name":"Il était une fois dans l'ouest","description":"Alors qu'il prépare une fête pour sa femme, Bet McBain est tué avec ses trois enfants. Jill McBain hérite alors des terres de son mari, terres que convoite Morton, le commanditaire du crime (celles-ci ont de la valeur maintenant que le chemin de fer doit y passer). Mais les soupçons se portent sur un aventurier, Cheyenne..."},{"name":"Bienvenue à Gattaca","description":"Dans un monde parfait, Gattaca est un centre d'études et de recherches spatiales pour des jeunes gens au patrimoine génétique impeccable. Jérôme, candidat idéal, voit sa vie détruite par un accident tandis que Vincent, enfant naturel, rêve de partir pour l'espace. Chacun des deux va permettre à l'autre d'obtenir ce qu'il souhaite en déjouant les lois de Gattaca.","com_diens":{"listName":"Comédiens","list":[{"name":"Ethan Hawke","fonction":"Vincent Freeman"},{"name":"Uma Thurman","fonction":"Irene Cassini"},{"name":"Jude Law","fonction":"Jerome Eugene Morrow"},{"name":"Loren Dean","fonction":"Anton Freeman"}]},"production":{"listName":"Production","list":[{"name":"Danny DeVito","fonction":"Producteur"},{"name":"Michael Shamberg","fonction":"Producteur"},{"name":"Stacey Sher","fonction":"Productrice"}]},"equipe_technique":{"listName":"Equipe technique","list":[{"name":"Slawomir Idziak","fonction":"Directeur de la photographie"},{"name":"Lisa Zeno Churgin","fonction":"Monteuse"},{"name":"Sarah Knowles","fonction":"Directeur artistique"}]}}]

     ProjectsFactory.saveProject($scope.projects);

  });

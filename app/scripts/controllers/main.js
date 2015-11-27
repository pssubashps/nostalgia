'use strict';

/**
 * @ngdoc function
 * @name nostalgiaApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the nostalgiaApp
 */
angular.module('nostalgiaApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });

'use strict';

/**
 * @ngdoc function
 * @name storeApp.controller:TeamCtrl
 * @description
 * # TeamCtrl
 * Controller of the storeApp
 */
angular.module('storeApp')
  .controller('TeamCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.teammates = ['hi', 'bi'];
    this.teammates = ['hi', 'bi'];

  });

'use strict';

/**
 * @ngdoc function
 * @name storeApp.controller:TeamCtrl
 * @description
 * # TeamCtrl
 * Controller of the storeApp
 */
angular.module('storeApp')
  .controller('TeamCtrl', ['$scope', '$routeParams', function ($scope, $routeParams) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.params = $routeParams
    $scope.emailStub = $routeParams.emailStub

    $scope.isCurrent = function(email){
        var atIndex = email.indexOf("@")
        var adviserEmailStub = email.slice(0, atIndex)
        return adviserEmailStub === $scope.emailStub
    };



    $scope.advisors = [
        {'name': 'Jim', 'type': 'bad', 'email': 'Jim@gmail.com'},
        {'name': 'Jim', 'type': 'bad', 'email': 'Jim@gmail.com'},
        {'name': 'Jim', 'type': 'bad', 'email': 'Jim@gmail.com'},
        {'name': 'Jim', 'type': 'bad', 'email': 'Jim@gmail.com'},
        {'name': 'Jim', 'type': 'bad', 'email': 'Jim@gmail.com'},
        {'name': 'Jim', 'type': 'bad', 'email': 'Jim@gmail.com'},
        {'name': 'Jim', 'type': 'bad', 'email': 'Jim@gmail.com'},
        {'name': 'Jim', 'type': 'bad', 'email': 'Jim@gmail.com'},
        {'name': 'Jim', 'type': 'bad', 'email': 'Jim@gmail.com'},
        {'name': 'Jim', 'type': 'bad', 'email': 'Jim@gmail.com'},
        {'name': 'Jim', 'type': 'bad', 'email': 'Jim@gmail.com'},
        {'name': 'Jim', 'type': 'bad', 'email': 'Jim@gmail.com'},
        {'name': 'Jim', 'type': 'bad', 'email': 'Jim@gmail.com'},
        {'name': 'Jim', 'type': 'bad', 'email': 'Jim@gmail.com'},
        {'name': 'Rex', 'type': 'good', 'email': 'rex.salisbury@gmail.com'},
        {'name': 'Jim', 'type': 'bad', 'email': 'Jim@gmail.com'},
        {'name': 'Jim', 'type': 'bad', 'email': 'Jim@gmail.com'},
        {'name': 'Jim', 'type': 'bad', 'email': 'Jim@gmail.com'},
        {'name': 'Jim', 'type': 'bad', 'email': 'Jim@gmail.com'},
        {'name': 'Jim', 'type': 'bad', 'email': 'Jim@gmail.com'},
        {'name': 'Jim', 'type': 'bad', 'email': 'Jim@gmail.com'},
        {'name': 'Jim', 'type': 'bad', 'email': 'Jim@gmail.com'},
        {'name': 'Jim', 'type': 'bad', 'email': 'Jim@gmail.com'},
        {'name': 'Jim', 'type': 'bad', 'email': 'Jim@gmail.com'},
        {'name': 'Jim', 'type': 'bad', 'email': 'Jim@gmail.com'},
        {'name': 'Jim', 'type': 'bad', 'email': 'Jim@gmail.com'},
        {'name': 'Jim', 'type': 'bad', 'email': 'Jim@gmail.com'},
        {'name': 'Jim', 'type': 'bad', 'email': 'Jim@gmail.com'},
    ];

  }]);

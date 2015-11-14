var myApp = angular.module('myApp', []);

myApp.controller('mainController', ['$scope', '$timeout', function($scope, $timeout){

  $scope.name = 'Devfest'

  $timeout(function(){

    $scope.name = 'ITT';

  }, 3000);

}]);
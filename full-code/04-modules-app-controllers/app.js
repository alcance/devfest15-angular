// MODULE
// Step 1
//One object in the global namespace
var myApp = angular.module('myApp', ['ngMessages', 'ngResource']) // list of modules that app uses or is dependent on.

// Controller

//Step 2
myApp.controller('mainController', function($scope, $log, $filter, $resource) {

  //dont start until 06-scope-service
  console.log($scope);

  console.log('Log', $log)

  $log.log('== TESTING LOG SERVICE METHODS ==');
  $log.log('Hello');
  $log.info('Cool info');
  $log.warn('Warning! This is going to implode!');
  $log.debug('Debug information');
  $log.error('System down! Abort!');

  $scope.place = 'Devfest';
  $scope.whereAmI = function() {
    return 'Devfest'
  }

  // use filter service
  $scope.formattedName = $filter('uppercase')($scope.name);

  // filter service display
  $log.info($scope.name);
  $log.info($scope.formattedName);

  console.log($resource);

});

var searchPeople = function(firstName, lastName, height, age, occupation){

  return 'Ivan Dong';

}
// Log function without calling
console.log(searchPeople);

// You can take a function and convert it to a string
var searchPeopleString = searchPeople.toString();
console.log(searchPeopleString);


// This is how angular knows what to inject (DI)
// throw an array of arguments
console.log(angular.injector().annotate(searchPeople));
// ['firstName', 'lastName', 'height', 'occupation']


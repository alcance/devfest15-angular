var person = 'Juancho';

function logPerson() {
  console.log(person);
}


// add a containter to avoid pollution
var myApp = {};

myApp.person = 'Juancho';

myApp.logPerson = function() {
  console.log(myApp.person);
}



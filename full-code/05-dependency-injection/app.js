// Define un objecto
// Todo en Javascript en un objecto
var Person = function(firstname, lastname) {

  this.firstname = firstname;
  this.lastname = lastname;

}


// No crees el objeto dentro de tu funcion
// Los valores no se pueden cambiar
function logPerson() {
  var chuy = new Person('Jesus', 'Perez');
  console.log(chuy);
}

logPerson();




//Mejor haz esto (Inyecta el objecto en la funcion)
function logPerson2(person) {
  console.log(person);
}

var chona = new Person('Chona', 'Sandoval');
logPerson2(chona)

// Es todo lo que es pero es muy importante.
// La function depende de ls persona creada.
// Puedes obtener los datos de una BD

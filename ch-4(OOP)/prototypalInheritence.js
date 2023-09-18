// ---------------------------OOP in JavaScript---------------------------------
// --------inheritence-----
/*
One object get access of properties and methods of other object
*/
var person = {
  firstName: "Default",
  lastName: "Default",
  getFullName: function () {
    return this.firstName + " " + this.lastName;
  }
}

var jhon = {
  firstName: "Jhon",
  // lastName: "Doe", uncomment to undestand the prototype chain
}
// only for undersatnding purpose, don't do this ever

jhon.__proto__ = person;//jhon inherits all the properties and method of person
console.log(jhon.getFullName());


// everything in JavaScript is Object

// --------REFELECTION
/*
REFELECTION:
An object can look at itself changing it's properties and methods
 */

// use it for extend
// for in
for (var prop in jhon) {
  if (jhon.hasOwnProperty(prop)) { //not on its __proto__
    console.log(prop + "-->" + jhon[prop]);
  }
}
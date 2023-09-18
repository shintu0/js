console.log("OOP starts");

function Person(firstName, lastName) {
  console.log(this);
  this.firstName = firstName;
  this.lastName = lastName;

  console.log("the function Person is invoked");

}
Person.prototype.getFullName = function () {
  return this.firstName + " " + this.lastName;
}; //add properties to all the object of Type Person(efficient because only one copy)


//construct object via function
//not using "new" will not return anything and make the variable undefined
var john = new Person("john", "Doe");
console.log(john);

var jane = new Person("jane", "Doe");
console.log(jane);
// function constructor: a normal function used to construct the objects

console.log(john.getFullName());

//built in function constructor
var n = new Number("2");
var a = new String(2);
String.prototype.isLengthGreaterThanOne = function () {
  return this.length > 1;
}
//pure prototypal Inheritence

const person = {
  firstName: "Default",
  lastName: "Default",
  greet: function () {
    // console.log("Hi", this.firstName + " " + this.lastName);

    return "Hi" + " " + this.firstName;
  }
}

var jhon = Object.create(person);

console.log(jhon.greet());
jhon.firstName = "John";
console.log(jhon.greet());

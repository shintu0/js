console.log("ES6 CLASSES");

class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  greet() {
    return "Hi, " + this.firstName;
  }

}

var john = new Person("John", "Doe");
console.log(john.greet());


class InformalPerson extends Person {
  greet() {
    return "Yo! " + this.firstName;
  }
}


var jhon = new InformalPerson("Jhon", "Doe");
console.log(jhon.greet());

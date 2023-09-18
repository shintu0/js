var a = 3;
console.log(typeof a);

var x = "Strrr";
console.log(typeof x);

var arr = [];
console.log(typeof arr);
console.log(Object.prototype.toString.call(arr));

function Person(firstName, lastName) {
  console.log(this);
  this.firstName = firstName;
  this.lastName = lastName;


}

var john = new Person("John", "Doe");
console.log(john instanceof Person);

console.log(typeof undefined);
console.log(typeof null);


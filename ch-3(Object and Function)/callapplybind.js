// ------------------------callback, apply and bind-----------------------------
var obj = {
  firstName: "Tony",
  lastName: "Stark",
  getName: function () {
    var fullName = this.firstName + " " + this.lastName;
    return fullName;
  }
}

function log(x = "X", y = "Y") {
  console.log("Loged the Name:" + this.getName());
  console.log(x, y);
}
//bind //creates the copy and returns the function on which it is invoked so we have to call
log.bind(obj)();

//call //execute the function on which it is invoked with all required parmeters
log.call(obj, "Hello", "World");

//apply //execute the function on which it is invoked but argument will be list of parametes

log.apply(obj, ["Hello", "World"]);

//can be used in function borrowing
var obj2 = {
  firstName: "Toony",
  lastName: "Stank",
}
console.log(obj.getName.bind(obj2)());
console.log(obj.getName.apply(obj2));
console.log(obj.getName.call(obj2));

//can be used in function currying (creates copy of parameter with preset parameter)

function multiply(a, b) {
  return a * b;
}
var result = multiply.bind(this, 2, 5)();
console.log("bind--->", result);
var result = multiply.call(this, 2, 5);
console.log("call--->", result);
var result = multiply.apply(this, [2, 5]);
console.log("apply-->", result);
var multiplyByTwo = multiply.bind(this, 2);//2 will be the first parameter
console.log(multiplyByTwo(5));//5 will be second parameter


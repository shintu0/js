// ---------------Object and Fucntion-----------------------------------
var person = new Object();

console.log(person["firstName"]);//will be undefined

person["firstName"] = "Tony";
person["lastName"] = "Stark";
console.log(person);

console.log(person["firstName"]);

//almost simillar
firstNameProperty = "firstName";
console.log(person[firstNameProperty]);

//also we can use
person.address = new Object();
person.address.street = "Baker";
person.address.house = "Stark Tower";
console.log(person.firstName);
console.log(person.address);



//-------------------------Object Literals----------------------------------

var person1 = {
  firstName: "Tony",
  lastName: "Stank",
  address: {
    street: "Paiper Street",
    house: "Stank Tower",
    state: "NYC"
  }
}

console.log(person1);

function greet(person) {
  console.log("Hello, " + person.firstName);
}

greet(person);
//creating object on the fly(dynamically at call)
greet({ firstName: "Paper" });


// ------------------------------NameSpaces-------------------------------------
var greeting = "Namastey";
var greeting = "Hello";
// ---to use namespaces we can fake it by nesting the variable in to object (literals)
// to avoid colisions
hindi = { greeting: "Namastey" };
english = { greeting: "Hello" };




console.log(english.greeting);
console.log(hindi.greeting);

// -----------------------JSON AND OBJECT LITERALS-----------------------------
var req = {

}
console.log(req);


var req = {
  firstName: "Tony",
  lastName: "Stank",
  address: {
    street: "Paiper Street",
    house: "Stank Tower",
    state: "NYC"
  }
}
//all JSON are javascript object but JavaScript object are not JSON
// JSON have some strict rules

console.log(JSON.stringify(req));
var req = JSON.stringify(req);
console.log(JSON.parse(req));

// --------------Function are objects in JavaScript---------------------------
var req = {
  name: "Tony Stark",
  getName: function () {
    return this.name;
  }
}
//
console.log(req.getName());
//
console.log("----->" + req.getName());

// greetHello();//undefined here as on creation phase get hoisted
// an anynomous function is assigned to a variable as a value
var greetHello = function () {
  console.log("Hello");
}
greetHello();

function log(a) {
  console.log(a);
}

log({ greet: "hi" });
// ---first class function function as value of a variable also used as immidiately invoked function

console.log(function () {
  console.log("hello anysnomus function as first order which is value that can be assigned to a variable");
  return 1;
}());

// -----------------------variables by value and by refrence--------------------
//for primitive data types
var a = 10;
b = a; //assigned a copy of value(by value)
console.log(a);
console.log(b);
b++;
console.log(a);
console.log(b);
console.log(a === b);// false


//for object
var a = { firstName: "Tony" };
var b = a;//copy of memory refrence(by refrence)b is pointing to same memory spot as a
console.log(a);
console.log(b);
b.firstName = "paper";//mutated(changed) the refrenced object pointing to same memory spot
console.log(a);
console.log(b);
console.log(a.firstName === b.firstName);//true


// ---------------------this---------------------------------------------------
// this depends on the closet outer environment from where the function is implemented;

function getThis() {
  console.log(this);
}
console.log("1");
// getThis();

var obj = {
  name: getThis(),
  func: function () {
    console.log("2")
    function funcThis() {
      console.log("3")
      console.log(this);
    }
    console.log(this);


  }
}
console.log(obj.func());

// --------------------------arrays in JS--------------------------------------
console.log("---------------------Array-----------------------------")
var jsArray = [
  "hello",
  function () {
    console.log("hello");
    return "Done";
  },
  {
    name: "Tony Stark",
    address: "Stark Tower"
  }

]

console.log(jsArray[1]());

console.log(jsArray);

// --------------------------default values and spread------------------------


function logX_prev_version_Js(x) {
  x = x || "Default  x in old JS";
  console.log(x);
}

function logX(x = "Default x latest JS version") {
  console.log(x);
}

logX_prev_version_Js();
logX();

// ---------------------------arguments array or spread---------------------

function ySpread(x, y, z) {
  console.log(arguments);
  console.log(x, y, z);
}

ySpread(1, 2, 3);



function z(x, y, ...cords) {
  console.log(x, y, z)
  console.log(cords);
}

z("hello", "world", 0, 3, "x", "y", "z", 4, 5, 6, 7, 8, 9);


// -------------------imideatly invoked function expression(IIFE)--------------
//Syantax 1
(function (params) {
  console.log(params);
}("params IIFE"));
//Syantax 2
(function (params) {
  console.log(params);
})("params IIFE");
var greetFunction = function (params) {
  console.log(params);
}("params IIFE in var");


//--------------------------------closure---------------------------------------
function greetFunc(whatToSay) {
  var variablXfromGreetFunc = "variablXfromGreetFunc"
  return function (name) {
    console.log(whatToSay, name, variablXfromGreetFunc);
  }

}

//1 way to call
sayHi = greetFunc("Hello");
sayHi("Tony");
//2 way to call
greetFunc("Hola")("Tony");

























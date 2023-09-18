
b();
console.log(a)
var a = "Hello World";
// console.log(this instanceof Window);

function b(params) {
  console.log("Called b");
}

var c;

console.log(c === undefined);

// -------------------execution context----------------------
function one(params) {
  console.log(c);
  c = 10;
  console.log(c);
}

function two(params) {
  c = 2;
  one();
  globalVar = 3.14;
  // console.log(c);
}

two();

console.log(globalVar);

// --------------------------- the scope chain-------------
//lexical mean physical implimentation determines its outer enviornment


function function1() {
  console.log("Inside function1");
  function function2() {
    console.log("Inside function2");
    console.log(myVar);//2
  }
  var myVar = 2;
  function2();

}


function1();

// -------------------------------------asynchronus callbackls--------------




function function3() {
  console.log("Inside function3");
  var myVar = 2;
  function4();

}

function function4() {
  console.log("Inside function4");

  console.log(myVar); //1
}
var myVar = 1;


function3();

//-----------------------------------the scope chain-------------
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

// --------------------------------closure II--------------------------------
function buildFunction() {
  var arr = [];
  for (var i = 0; i < 10; i++) {
    arr.push(function () {
      console.log(i);
    })
  }
  console.log("i==", i);
  return arr;
}
var funcArray = buildFunction();

funcArray[0]();
funcArray[1]();
funcArray[2]();
//problem all the above will output the same value of i
//solution 1

console.log("Old Version Solution 1");
function buildFunction1() {
  var arr = [];
  for (var i = 0; i < 10; i++) {
    arr.push((function (j) {
      return function () {
        console.log(j);
      }
    })(i));
  }
  // console.log("2nd ------", i);
  return arr;
}
var funcArray1 = buildFunction1();

funcArray1[0]();
funcArray1[1]();
funcArray1[2]();

//solution 2
console.log("ES6 Solution", 2);

function buildFunction2() {
  var arr = [];
  for (let i = 0; i < 10; i++) {
    arr.push(function () {
      console.log(i);
    })
  }
  return arr;
}
var funcArray2 = buildFunction2();

funcArray2[0]();
funcArray2[1]();
funcArray2[2]();


// --------------------------------coercion------------------------------------
/*
---------------------------------implicit coercion-----------------------------

coercion is the process in which JavaScript forcefully cast one data type to other
depending the operation execution.
operators are function that are implimented syntactically inbuilt to the language
*/
let a = 1, b = "2";
//coercion
console.log(a + b);
//handling coercion
console.log(+b + a);

console.log(Number(undefined));
console.log(Number(null));

//undfined and null behave differently

/*
== coerce the two values and also other operators do the same
but === don't
*/

//-------------------------type Casting or explicit coercion---------------------------------------------
var x = 2.10, y = "2.13";
console.log("Converting the number to boolean: " + Boolean(x));
console.log("String to float: " + (Number.parseFloat(y) + 1)); //




// --------------------------------coercion------------------------------------

//---------------------------comparison operator-------------------------------
//associativity means in which direction operator will operate
//presedence means which operator will operate first according to the priority

//associativity left to right
console.log(1 < 2 < -1);//true<-1
console.log(1 < 2 < 3);//true<3


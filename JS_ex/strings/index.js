let str="sintu";
let result;

//spliting
console.log(">>>>>>>>>Spliting>>>>>>>>>>>");
result=str.split("");
console.log(str);
console.log(result);
//alternative
result=[...str];
console.log(result);

//searching
console.log(">>>>>>>>Searching>>>>>>>>>>>");
result=str.charAt(1);
console.log(result);

result=str.indexOf("n")
console.log(result);

result=str.includes("in");
console.log(result);


result=(str+"iii").search("i"); //return 1 if pattern occured  else -1
console.log(result);


result=(str+"i").lastIndexOf("i"); //return number of occurence of the pattern
console.log(result);





//slice
console.log(">>>>>>>>>>>>>Slicing>>>>>>>>>>>");
result=str.slice(1,3);
console.log(str);
console.log(result);

//concat
console.log(">>>>>>>>>>>>>concat>>>>>>>>>>>");
result=str.concat([" tiwari"," from Everywhere"]);
console.log(str);
console.log(result);

//Substring

console.log(">>>>>>>>>>>>Substing>>>>>>>>>>>>")

result=(str+"iii").substring(0,3); //return substring of occurence of the pattern
console.log(result);

//replacing char in string

console.log(">>>>>>>>>>>>Replaccing>>>>>>>>>>>>")

result=(str+"iii").replace("i",""); //replace first occurence of the pattern
console.log(result);

result=(str+"iii").replaceAll("i",""); //replace all occurence of the pattern
console.log(result);

//padding
console.log(">>>>>>>>>>>>padding>>>>>>>>>>>>>>>>");
result=str.padStart(12,"*")
console.log(str);
console.log(result);

result=str.padEnd(12,"*")
console.log(str);
console.log(result);




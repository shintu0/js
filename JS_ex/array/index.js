const arr=[1,2,3,0,9];
const empArr=new Array(10);
const nonEmpArr=new Array("10");
const stringArray=Array.from("Sintu".toLocaleLowerCase());
// const stringArray=[..."Sintu"]; alternative


console.log(arr,arr.length);
console.log(empArr,empArr.length);
console.log(nonEmpArr,nonEmpArr.length);
console.log(stringArray,stringArray.length);

//******************sorting********************

console.log(arr.sort());

console.log(arr.sort().reverse());


//      alternative

console.log(arr.sort((a,b)=>{
  return a-b;
}));

console.log(arr.sort((a,b)=>{
  return b-a;
}));

//      string Array

// console.log(stringArray.sort()); //no effect

console.log(">>>>>String Array >>>>>>>>");
console.log([..."Array"].sort((a,b)=>((a<b)-(b<a))));
console.log(stringArray.sort((a,b)=>{
  // console.log(a,b);
  //(a<b)-(b<a)
  return (a<b)-(b<a);
}));

// console.log(stringArray.sort((a,b)=>{
//   console.log(a,b);
//   //(a<b)-(b<a)
//   return (a>b)-(b>a);
// }));


let tempArray,result;

//slicing
console.log(">>>>>>>>Slicing>>>>>>>>>>>>");
tempArray=Array.from("ShintuTiwari");
result=tempArray.slice(1,3);

console.log(tempArray);
console.warn(result)








//searching
console.log(">>>>>>>>Searching>>>>>>>>>>>>")
tempArray=Array.from("kaddbcd");
result=tempArray.find(e=>e=="l");//return undefined if not found or return the element for the first and only occurence
console.log(tempArray);
console.log(result);

result=tempArray.includes("c");//return if particular pattern not found

console.log("Includes:"+result); 

result=tempArray.indexOf("c")

console.log("Index of c:"+result);//return -1 if not found else index of the first occurnece



result=tempArray.lastIndexOf("d")

console.log("Last Index of d:"+result);//return -1 if not found else index of the first occurnece


//stack and queue operation

console.log(">>>>>>>>>>Stack and Queue>>>>>>>>>>>")

      //inqueue

console.log(">>>>>>>inqueue>>>>>>>");
console.log(tempArray);
tempArray.push("q");
console.log(tempArray);

//      deque
console.log(">>>>>>>deque>>>>>>>");

console.log(tempArray);
result =tempArray.shift();
console.log(tempArray);
console.log(result);

//      push
console.log(">>>>>>>push>>>>>>>");

console.log(tempArray);
tempArray.push("z");
console.log(tempArray);


//      pop
console.log(">>>>>>>pop>>>>>>>");

console.log(tempArray);
result =tempArray.pop();
console.log(tempArray);
console.log(result);


//insertion
console.log(">>>>insertion>>>>>>>>>");
console.log("Insertion At front");
console.log(tempArray);

tempArray.unshift("!");
console.log(tempArray);

//insert at particular index
console.log("Modification");

console.log(tempArray);
result=tempArray.fill([1,2,3],1,4,);
console.log(tempArray);
console.log(result);


//splicing

console.log(">>>>>>>>Insertion using splicing>>>>>>>>>>>>")
tempArray=Array.from("kabcd");
result=tempArray.splice(1,0,"i","a"); //first param(where to start) second param how many times(can be 0) third as rest param what to insert
console.log(tempArray);
console.log(result);


//accumulating

console.log(">>>>>>>>>accumulating>>>>>>>>>>>>>>>>")

tempArray=[..."01234567"]

result=tempArray.reduce((pre,curr,curri)=>{
  return +pre+ +curr;
},0)
console.log(tempArray);

console.log(result);




//filling
console.log(">>>>>>>>>filling>>>>>>>>>>>>");
console.log(tempArray);

tempArray.fill("x",0,4);
console.log(tempArray);



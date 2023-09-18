const { writeFileSync } = require("fs");
const os = require("os");

console.log(greet());

console.log("Dir Name>>>" + __dirname);
console.log("dir:" + process.cwd());
console.log("Dir Name>>>" + __filename);

writeFileSync("hello.txt", "Hello World");
console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
//OS
console.log(os.arch());
console.log(os.totalmem() / (1024 * 1024 * 1024));
console.log(os.hostname());
console.log(os.platform());
console.log(os.userInfo());

function greet() {
  console.log("Hello");

  return 1;
}
console.log("OS: " + os.type());

//FETCH IN NODE
fetch("https://next-ts-todo.vercel.app/api/users").then(res=>res.json()).then(result=>{
  console.log(">>>>>>>>>>>>>>>>");
  console.log(result);
}).catch(err=>{
  console.log(err);
});
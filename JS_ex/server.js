const http = require("http");

http.createServer((req, res) => {
  console.log("Running on port:4500");
  res.write("<h1>Namastey World</h1>");
  res.end();
}).listen(5000);
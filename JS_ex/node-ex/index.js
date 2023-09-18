const express = require("express");
const path = require("path");
const { requestFilter } = require('./middleware');

const app = express();

const publicPath = path.join(__dirname, "public");
// const templeatePath = path.join(__dirname, "views");

//setting template engine
app.set("view engine", "ejs");
//make views folder for rendering file via template engine (default configuration)

//use middleware for redering the pages directly from the folder route as per the page name
// app.use(express.static(publicPath));


app.get("/", (req, res) => {

  // console.log("Data =>>>" + req.query);
  if (req.query.name) {
    res.send("Namastey " + req.query.name);

  } else {
    res.send("Namastey World");

  }
});

app.get("/about", (req, res) => {
  res.send("This is about page");
});

//rendering files securely via template engine
app.get("/profile", (req, res) => {
  res.render("profile", { user: req.query, countries: ["A", "B", "C"] });
});




// *****************MIDDLEWARE******************

// application level middleware
// app.use(middleware);

//route level middleware
// 1
app.get("/contact", requestFilter, (req, res) => {
  res.send("Welcome to the contact");
});

app.get("/photos", requestFilter, (req, res) => {
  res.send("Welcome to the photos");
});

//2 group of route to be applied with middleware

const route = express.Router();
route.use(requestFilter);

route.get("/firends", (req, res) => {
  res.send("Welcome to the firends");
});

route.get("/family", (req, res) => {
  res.send("Welcome to the Family");
});


app.use("/", route);


//rendering files securely
app.get("/help", (req, res) => {
  res.sendFile(`${publicPath}/helpPage.html`);
});

app.get("*", (req, res) => {
  res.sendFile(`${publicPath}/notfound.html`);
});

app.listen(7000, () => {
  console.log("Listening on 7000...");
});

//TESTING
module.exports = {
  app
}
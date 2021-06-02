const express = require("express"); // returns a function

// create an instance of express app
const app = express();

// register view engine
app.set("view engine", "ejs"); // will automatically look for .ejs files in views

// listen for requests
app.listen(3000); // This also creates an instance of server (amazing!)

// Now we can respond to url
app.get("/", (req, res) => {
  res.render("index"); // This will render a view. Specify where the ejs file is.
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/blogs/create", (req, res) => {
  res.render("create");
});

// 404 page (needs to be at the bottom of all routes)
app.use((req, res) => {
  res.status(404).render("404");
});

const express = require("express"); // returns a function

// create an instance of express app
const app = express();

// listen for requests
app.listen(3000); // This also creates an instance of server (amazing!)

// Now we can respond to url
app.get("/", (req, res) => {
  // res.send("<p>Home page</p>"); // Automatically sense and set the header/status code.
  res.sendFile("./views/index.html", { root: __dirname }); // has to specify absolute path
});

app.get("/about", (req, res) => {
  // res.send("<p>About page</p>");
  res.sendFile("./views/about.html", { root: __dirname });
});

//redirect
app.get("about-me", (req, res) => {
  res.redirect("/about"); // This saves us so much work with setHeader and status code.
});

// 404 page (needs to be at the bottom of all routes)
app.use((req, res) => {
  res.status(404).sendFile("./views/404.html", { root: __dirname });
}); // This basically says, if there is no match so far, USE this callback function.

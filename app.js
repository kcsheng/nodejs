const express = require("express"); 
const morgan = require("morgan");

const app = express();

app.set("view engine", "ejs"); 

app.listen(3000); 

// middleware and static files
app.use(express.static("public")); // express middleware 
app.use(morgan("dev"));

app.get("/", (req, res) => {
  const blogs = [
    {
      title: "How to greet to people",
      snippet: "first, be polite, second, be nice, third..",
    },
    {
      title: "How to love people",
      snippet: "first, be gentle, second, be good, third..",
    },
    {
      title: "How to hate people",
      snippet: "first, be nasty, second, be bad, third..",
    },
  ];

  res.render("index", { title: "Home", blogs }); // blogs is shorthand for blogs: blogs
});

app.get("/about", (req, res) => {
  res.render("about", { title: "About" });
});

app.get("/blogs/create", (req, res) => {
  res.render("create", { title: "Create" });
});

// 404 page (needs to be at the bottom of all routes)
app.use((req, res) => {
  res.status(404).render("404", { title: "404" });
});

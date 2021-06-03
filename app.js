const express = require("express"); 
const morgan = require("morgan");
const mongoose = require("mongoose");
const Blog = require("./models/blog")


const app = express();

// connect to mongo db
const dbURI = "mongodb+srv://kcsheng:80Bostus0612@clusternodejs.o5o1a.mongodb.net/nodejs?retryWrites=true&w=majority"
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => { app.listen(3000); })
  .catch((err) => { console.log(err); }) // the connection returns a promise.

app.set("view engine", "ejs"); 

 

// middleware and static files
app.use(express.static("public")); // express middleware 
app.use(morgan("dev"));

// Sandbox routes to test out mongoose and mongodb
app.get("/add-blog", (req, res) => {
  const blog = new Blog({
    title: "How to make a sandwich.",
    snippet: "This is about making a sandwich.",
    body: "step one: do this, step two: do that..."
  })
  blog.save()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    })
});

app.get("/all-blogs", (req, res) => {
  Blog.find()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    })
})



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

const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const Blog = require("./models/blog");

const app = express();

// connect to mongo db
const dbURI =
  "mongodb+srv://kcsheng:80Bostus0612@clusternodejs.o5o1a.mongodb.net/nodejs?retryWrites=true&w=majority";
mongoose
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => {
    app.listen(3000);
  })
  .catch((err) => {
    console.log(err);
  }); // the connection returns a promise.

app.set("view engine", "ejs");

// middleware and static files
app.use(express.static("public")); // express middleware
app.use(express.urlencoded({ extended: true })); // encode the form data
app.use(morgan("dev"));

// generic routes
app.get("/", (req, res) => {
  res.redirect("/blogs");
});

app.get("/about", (req, res) => {
  res.render("about", { title: "About" });
});

// Blog routes

app.get("/blogs", (req, res) => {
  Blog.find()
    .sort({ createdAt: -1 })
    .then((result) => {
      res.render("index", { title: "All Blogs", blogs: result });
    })
    .catch((err) => {
      console.log(err);
    });
});

app.post("/blogs", (req, res) => {
  const blog = new Blog(req.body);
  blog
    .save()
    .then((result) => {
      res.redirect("/blogs");
    })
    .catch((err) => {
      console.log(err);
    });
});

app.get("/blogs/create", (req, res) => {
  res.render("create", { title: "Create" });
});

// 404 page (needs to be at the bottom of all routes)
app.use((req, res) => {
  res.status(404).render("404", { title: "404" });
});

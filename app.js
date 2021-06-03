const express = require("express"); 
const morgan = require("morgan");
const mongoose = require("mongoose");


const app = express();

// connect to mongo db
const dbURI = "mongodb+srv://kcsheng:80Bostus0612@clusternodejs.o5o1a.mongodb.net/notejs?retryWrites=true&w=majority"
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => { app.listen(3000); })
  .catch((err) => { console.log(err); })

app.set("view engine", "ejs"); 

 

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

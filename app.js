const express = require("express");
const app = express();
const hbs = require("hbs");

// Handlebars
app.set("view engine", "hbs");
hbs.registerPartials(__dirname + "/views/partials");

// Static content
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("home", {
    title: "HOME - HBS",
    name: "Jessica Villa",
  });
});

app.get("/generic", (req, res) => {
  res.render("generic", {
    title: "GENERIC",
    name: "Jessica",
  });
});

app.get("/elements", (req, res) => {
  res.render("elements", {
    title: "ELEMENTS",
    name: "Jessica",
  });
});

app.get("*", (req, res) => {
  res.sendFile(__dirname + "/public/404.html");
});

app.listen(3000);

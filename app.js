const express = require("express");
const app = express();

app.set("view engine", "hbs");

// Static content
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/generic", (req, res) => {
  res.sendFile(__dirname + "/public/generic.html");
});

app.get("/elements", (req, res) => {
  res.sendFile(__dirname + "/public/elements.html");
});

app.get("*", (req, res) => {
  res.sendFile(__dirname + "/public/404.html");
});

app.listen(3000);

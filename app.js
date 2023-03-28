const express = require("express");
const app = express();

// Static content
app.use(express.static("public"));

app.get("/custom-route", (req, res) => {
  res.send("Hello World");
});

app.get("*", (req, res) => {
  res.sendFile(__dirname + "/public/404.html");
});

app.listen(3000);

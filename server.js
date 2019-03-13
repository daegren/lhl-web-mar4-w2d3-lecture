const express = require("express");
const bodyParser = require("body-parser");
const methodOverride = require("method-override");

const PORT = process.env.PORT || 8080;

const app = express();

// Middleware

// Use the body parsing middleware to handle forms
app.use(bodyParser.urlencoded({ extended: false }));

// Use method override to get around a browser limitation:
//   forms can only POST or GET
// By using this middleware we can add a query string param `_method` to change
// the method to PUT or DELETE
app.use(methodOverride("_method"));

// Add routes here

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

// Boot server

app.listen(PORT, () => {
  console.log(`Server is listening at http://localhost:${PORT}/`);
});

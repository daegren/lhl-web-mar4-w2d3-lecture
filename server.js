const express = require("express");
const bodyParser = require("body-parser");
const methodOverride = require("method-override");

const PORT = process.env.PORT || 8080;

const app = express();

app.set("view engine", "ejs");

// Models

const Users = require("./lib/users");

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
  res.render("home");
});

// CRUD Routes for users

// GET /users/new (CREATE)
app.get("/users/new", (req, res) => {
  // TODO: Fill this in
  res.render("users/new");
});

// POST /users (CREATE)
app.post("/users", (req, res) => {
  // TODO: Fill this in
  if (!req.body.username || !req.body.email) {
    res.redirect("/users/new");
    return;
  }

  const user = Users.create(req.body.username, req.body.email);

  res.redirect(`/users/${user.id}`);
});

// GET /users (READ)
app.get("/users", (req, res) => {
  // TODO: Fill this in
  const users = Users.all();
  res.render("users/index", { users: users });
});

// GET /users/:id (READ)
app.get("/users/:id", (req, res) => {
  // TODO: Fill this in
  const user = Users.find(req.params.id);
  res.render("users/show", { user: user });
});

// GET /users/:id/edit (UPDATE)
app.get("/users/:id/edit", (req, res) => {
  // TODO: Fill this in
  const user = Users.find(req.params.id);
  res.render("users/edit", { user: user });
});

// PUT /users/:id (UPDATE)
app.put("/users/:id", (req, res) => {
  // TODO: Fill this in
  if (!req.body.username || !req.body.email) {
    res.redirect(`/users/${req.params.id}/edit`);
    return;
  }

  Users.update(req.params.id, req.body.username, req.body.email);
  res.redirect("/users");
});

// DELETE /users/:id (DELETE)
app.delete("/users/:id", (req, res) => {
  // TODO: Fill this in
  Users.delete(req.params.id);
  res.redirect("/users");
});

// Boot server

app.listen(PORT, () => {
  console.log(`Server is listening at http://localhost:${PORT}/`);
});

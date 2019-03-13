const uuid = require("uuid/v4");

const users = {};

const all = () => {
  return Object.values(users);
};

const find = id => {
  return users[id];
};

const create = (username, email) => {
  const id = uuid();
  const newUser = {
    id: id,
    username: username,
    email: email
  };

  users[id] = newUser;
  return newUser;
};

const update = (id, username, email) => {
  const user = find(id);

  if (user) {
    user.username = username;
    user.email = email;

    return true;
  } else {
    return false;
  }
};

// Can't use `delete` as it's a reserved keyword in JavaScript
const deleteUser = id => {
  delete users[id];
};

module.exports = {
  all: all,
  find: find,
  create: create,
  update: update,
  // But we can map it to a key called delete since the key is just a string
  delete: deleteUser
};

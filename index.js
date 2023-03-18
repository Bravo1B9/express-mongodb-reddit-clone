const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

let nextId = 1;

const users = [];

class User {
  constructor(id, email, password) {
    this.id = id;
    this.email = email;
    this.password = password;
  }
}

const addUser = (req, res) => {
  const newUser = new User(
    nextId,
    req.body.email,
    req.body.password
  );
  users.push(newUser);
  nextId++;
  res.json({ message: 'New user added' });
};

const getUsers = (req, res) => {
  res.json({ users: users });
};

app.post('/users', addUser);
app.get('/users', getUsers);

app.listen(3000, () => {
  console.log('App listening on port 3000');
});
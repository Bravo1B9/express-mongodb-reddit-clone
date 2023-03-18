const express = require('express');

const app = express();

const users = [
  { id: 1, email: 'brofe93@gmail.com', password: 'pass123' },
  { id: 2, email: 'someguy@gmail.com', password: 'pass123' },
  { id: 3, email: 'anotheruser@gmail.com', password: 'pass123' }
];

const getUsers = (req, res) => {
  res.json({ users: users });
};

app.get('/users', getUsers);

app.listen(3000, () => {
  console.log('App listening on port 3000');
});
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

let nextId = 1;
let nextPostId = 1;

const users = [];

class User {

  constructor(id, email, password) {
    this.id = id;
    this.email = email;
    this.password = password;
    this.posts = [];
  }

  addPost(title, content) {
    const newPost = new Post(nextPostId, title, content);
    this.posts.push(newPost);
    nextPostId++;
  }

}

class Post {
  constructor(id, title, content) {
    this.id = id;
    this.title = title;
    this.content = content;
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

const addPost = (req, res) => {
  let user;
  for(i = 0; i < users.length; i++) {
    if (users[i].id === req.body.id) {
      user = users[i];
    }
  }
  user.addPost(req.body.title, req.body.content);
  res.json({ message: 'Post added' });
}

const getUsers = (req, res) => {
  res.json({ users: users });
};

app.post('/users', addUser);
app.get('/users', getUsers);
app.post('/posts', addPost);

app.listen(3000, () => {
  console.log('App listening on port 3000');
});
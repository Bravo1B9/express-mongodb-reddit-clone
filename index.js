const posts = [];

let nextPostId = 1;

class Post {
  constructor(id, title, content) {
    this.id = id;
    this.title = title;
    this.content = content;
  }
}

const createPost = (title, content) => {
  const post = new Post(nextPostId, title, content);
  posts.push(post);
};

createPost('First Post', 'This is my first post');

console.log(posts);
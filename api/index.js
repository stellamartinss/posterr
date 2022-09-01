const users = require('./db/users.json');
const posts = require('./db/posts.json');

module.exports = () => ({
  users: users,
  posts: posts
});

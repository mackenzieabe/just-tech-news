const User = require('./User');
const Post = require('./Post') 

// create associations
//A user can make many posts. But a post only belongs to a single user, and never many users.
User.hasMany(Post, {
    foreignKey: 'user_id'//in post model
  }); 

  Post.belongsTo(User, {
    foreignKey: 'user_id',//in post model
  });

module.exports = { User, Post };
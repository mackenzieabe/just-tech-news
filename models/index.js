const User = require('./User');
const Post = require('./Post');
const Vote= require('./Vote');

// create associations
//A user can make many posts. But a post only belongs to a single user, and never many users.
User.hasMany(Post, {
    foreignKey: 'user_id'//in post model
  }); 

  Post.belongsTo(User, {
    foreignKey: 'user_id',//in post model
  });

  User.belongsToMany(Post, {
    through: Vote,
    as: 'voted_posts',
    foreignKey: 'user_id'
  });
  
  Post.belongsToMany(User, {
    through: Vote,
    as: 'voted_posts',
    foreignKey: 'post_id'
  });

  Vote.belongsTo(User, {
    foreignKey: 'user_id'
  });
  
  Vote.belongsTo(Post, {
    foreignKey: 'post_id'
  });
  
  User.hasMany(Vote, {
    foreignKey: 'user_id'
  });
  
  Post.hasMany(Vote, {
    foreignKey: 'post_id'
  });

module.exports = { User, Post, Vote };
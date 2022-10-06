const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');

// Post belongsTo User
Post.belongsTo(User, {
    foreignKey: 'user_id',
});

// User has many Posts
User.hasMany(Post, {
    foreignKey: 'user_id',
    onDelete: 'cascade'
});

// Comment belongsTo User
Comment.belongsTo(User, {
    foreignKey: 'user_id',
});

// User has many Comments
User.hasMany(Comment, {
    foreignKey: 'user_id',
    onDelete: 'cascade'
});

// Comment belongsTo Post
Comment.belongsTo(Post, {
    foreignKey: 'post_id',
});

// Post has many Comments
Post.hasMany(Comment, {
    foreignKey: 'post_id',
    onDelete: 'cascade'
});

module.exports = { 
    User, 
    Post, 
    Comment 
};
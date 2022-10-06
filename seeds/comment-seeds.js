const { Comment } = require('../models');

const commentData = [
  {
    content: "This is fabalous post!",
    user_id: 1,
    post_id: 1,
  },
  {
    content: "This is my second comment!",
    user_id: 1,
    post_id: 2,
  },
  {
    content: "Your post makes my day!",
    user_id: 2,
    post_id: 2,
  },
];

const seedingComments = () => Comment.bulkCreate(commentData);

module.exports = seedingComments;

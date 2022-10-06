const { Post } = require('../models');

const postData = [
  {
    title: "Why MVC is so important?",
    content: "MVC allows developers to maintain a tru separation of concerns, devising their code between the Model layer for data, the View layer for design, and the Controller layer for application logic.",
    user_id: 1
  },
  {
    title: "Autehntication vs. Authorization",
    content: "There i a difference between authentication and authorization. Authentication means confirming your own identity, whereas authorization means being allowed access to the system.",
    user_id: 2
  },
];

const seedingPosts = () => Post.bulkCreate(postData);

module.exports = seedingPosts;

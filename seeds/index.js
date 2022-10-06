const seedingUsers = require('./user-seeds');
const seedingPosts = require('./post-seeds');
const seedingComments = require('./comment-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');

  await seedingUsers();
  console.log('\n----- USERS SEEDED -----\n');

  await seedingPosts();
  console.log('\n----- POSTS SEEDED -----\n');

  await seedingComments();
  console.log('\n----- COMMENTS SEEDED -----\n');

  process.exit(0);
};

seedAll();

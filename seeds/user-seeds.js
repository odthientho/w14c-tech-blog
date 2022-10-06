const { User } = require('../models');

const userData = [
  {
    username: 'arthur',
    password: 'HelloWorld1234'
  },
  {
    username: 'odthientho',
    password: 'Abc@1234'
  },
];

const seedingUsers = () => User.bulkCreate(userData, {
  individualHooks: true,
  returning: true,
});

module.exports = seedingUsers;

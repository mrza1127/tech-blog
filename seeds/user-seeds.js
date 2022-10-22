const {User} = require('../models');

const userData = [
    {
        username: 'isaias',
        email: 'isaias@gmail.com',
        password: 'password'
    },
    {
        username: 'crazy21',
        email: '21@gmail.com',
        password: 'password'
    },
    {
        username: 'man8',
        email: 'man@gmail.com',
        password: 'password'
    },
    {
        username: 'dragon1',
        email: 'dragon1@gmail.com',
        password: 'password'
    },
    {
        username: 'yeahhh',
        email: 'nahh@gmail.com',
        password: 'password'
    }
];

// creates the data in the user table, the individualHooks will hash the password when the user is created
const seedUsers = () => User.bulkCreate(userData, {individualHooks: true});

module.exports = seedUsers
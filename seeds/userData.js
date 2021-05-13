const { User } = require('../models');

const userData = [
    {
        username: 'janeDoe',
        email: 'jane.doe@gmail.com',
        password: 'password1234'
    },
    {
        username: 'EmilySmith',
        email: 'emily.smith@gmail.com',
        password: 'password1234'
    },
];

const seedUsers = () => User.bulkCreate(userData);
module.exports = seedUsers;
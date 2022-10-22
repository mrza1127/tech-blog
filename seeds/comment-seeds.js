const  {Comment} = require('../models');

const commentData = [
    {
        comment_entry: 'Cheese',
        post_id: 5,
        user_id: 1
    },
    {
        comment_entry: 'congrats',
        post_id: 4,
        user_id: 2
    },
    {
        comment_entry: 'lasagna',
        post_id: 3,
        user_id: 3
    },
    {
        comment_entry: 'Im starving',
        post_id: 2,
        user_id: 4
    },
    {
        comment_entry: 'Thank you for this info',
        post_id: 1,
        user_id: 5
    }
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
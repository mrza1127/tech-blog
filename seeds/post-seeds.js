const {Post} = require('../models')

const postData = [
    {
        title: 'What is a 400 error?',
        post_text: '400 is a bad request. The server cannot comprehend what the user is trying to get',
        user_id: 1
    },
    {
        title: 'What is a Hook?',
        post_text: 'Hooks are functions that are to be called before or after another function is to be executed.',
        user_id: 2
    },
    {
        title: 'What is a third part API?',
        post_text: 'An API is a: application programming interface.',
        user_id: 3
    },
    {
        title: 'Do I need sessions?',
        post_text: 'Preferrably',
        user_id: 4
    },
    {
        title: 'Is the console real?',
        post_text: 'Yes',
        user_id: 5
    }
]

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
const mongoose = require('mongoose');

const Post = require('./database/models/Post')

mongoose.connect('mongodb://localhost/node-test-blog')

Post.create({
    title: 'My First Blog',
    description:'Awesome MongoDB',
    content: 'Lorem Ipsum content.'
} , (error , post) => {
    console.log(error , post);
})
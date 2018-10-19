const path = require('path');
const express = require('express');
const expressEdge = require('express-edge');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Post = require('./database/models/Post');
const fileUpload = require('express-fileupload');


const app = new express();

const createPostController = require('./controllers/createPost');
const homePageController = require('./controllers/homePage');
const storePostController = require('./controllers/storePost');
const getPostController = require('./controllers/getPost');
const createUserController = require('./controllers/createUser');
const storeUserController = require('./controllers/storeUser');

mongoose.connect('mongodb://localhost/node-blog');

app.use(fileUpload());
app.use(express.static('public'));
app.use(expressEdge);
app.set('views' , path.resolve(__dirname , 'views'));

app.use(bodyParser.json());             // for decoding the file send as json format fron browser
app.use(bodyParser.urlencoded({extended : true}));       // for decoding similar to above combined to have favourable result

const storePost = require('./middleware/storePost');

app.use('posts/store', storePost);

app.get('/' , homePageController);
app.get('/post/new' , createPostController);
app.post('/posts/store' , storePostController);
app.get('/post/:id' , getPostController);
app.get('/auth/register' , createUserController);
app.post('/users/register', storeUserController);


app.listen(4000,()=>{
    console.log('The App Listening On Port 4000');
})
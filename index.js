const path = require('path')
const express = require('express');
const expressEdge = require('express-edge');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');
const expressSession = require('express-session');
const connectMongo = require('connect-mongo');
const connectFlash = require('connect-flash');
const edge = require('edge.js');

const app = new express();
mongoose.connect('mongodb://localhost/node-blog');

app.use(connectFlash());

const mongoStore = connectMongo(expressSession)                             // Persistent session

app.use(expressSession({
    secret : 'Shubham',
    store: new mongoStore({
        mongooseConnection : mongoose.connection
    })
}))

const createPostController = require('./controllers/createPost');
const homePageController = require('./controllers/homePage');
const storePostController = require('./controllers/storePost');
const getPostController = require('./controllers/getPost');
const createUserController = require('./controllers/createUser');
const storeUserController = require('./controllers/storeUser');
const loginController = require('./controllers/login');
const loginUserController = require('./controllers/loginUser');
const logoutController = require('./controllers/logout');

app.use(fileUpload());
app.use(express.static('public'));
app.use(expressEdge);
app.set('views' , path.resolve(__dirname , 'views'));

app.use('*' , (req , res , next) => {
    edge.global('auth' , req.session.userId);
    next();
})

app.use(bodyParser.json());             // for decoding the file send as json format fron browser
app.use(bodyParser.urlencoded({extended : true}));       // for decoding similar to above combined to have favourable result

const storePost = require('./middleware/storePost');
const auth = require('./middleware/auth');
const redirectIfAuthenticated = require('./middleware/redirectIfAuthenticated');

app.get('/' , homePageController);
app.get('/post/new' , auth , createPostController);                         //authorize user
app.post('/posts/store' , auth , storePost , storePostController);          // validate post
app.get('/post/:id' , getPostController);
app.get('/auth/logout' , auth , logoutController);
app.get('/auth/login' , redirectIfAuthenticated, loginController);
app.post('/users/login' , redirectIfAuthenticated, loginUserController);
app.get('/auth/register' , redirectIfAuthenticated, createUserController);
app.post('/users/register', redirectIfAuthenticated, storeUserController);

app.use((req , res) => {res.render('not-found')});


app.listen(4000,()=>{
    console.log('The App Listening On Port 4000');
})
const express = require('express');
const res = require('express/lib/response');
const router = express.Router()  

const usersController= require('../controllers/users_controller');
const usersPostController = require('../controllers/posts_controller')


router.get('/', function(req,res){
    res.send('<h1>nothing after user</h1>')
})
router.get('/profile' ,usersController.profile);

router.get('/posts',usersPostController.posts);

router.get('/sign-up', usersController.signUp);

router.get('/sign-in',usersController.signIn);


module.exports =router;
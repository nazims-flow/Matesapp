const express = require('express');
const res = require('express/lib/response');
const router = express.Router()  

const usersController= require('../controllers/users_controller');


router.get('/', function(req,res){
    res.send('nothing after user')
})
router.get('/profile' ,usersController.profile);


module.exports =router;
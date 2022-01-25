/// entry point to all routes /// express.router  roues is the dictionary 

const express =require ('express')  // fetch the existing instance of express
const router = express.Router()  

const homeController = require('../controllers/home_controller');  // it will require home_controller before action of get and executing exported function home

console.log('router loaded');

//router.get('/',homeController.home)
router.get('/',homeController.home);

router.use('/users',require('./users'));

module.exports =router; // it is used to export the router to index.js where we will use it
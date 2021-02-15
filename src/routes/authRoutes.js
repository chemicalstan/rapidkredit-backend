const {Router} = require('express');
const router = Router();
const {authController} = require('../controllers')

router.post('/login', authController.login)

router.post('/signup', authController.signup)

module.exports =  router;
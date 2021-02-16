const {Router} = require('express');
const router = Router();
const {authController} = require('../controllers');
const Validate = require('../middlewares/validations');

router.post('/login', Validate.validatelogin, authController.login)

router.post('/signup', Validate.validatesignup, authController.signup)

module.exports =  router;
const {Router} = require('express');
const router = Router();
const {authController} = require('../controllers')

router.post('/login', authController.login)

router.post('/signup', (req, res)=>{
    return res.status(200).json({message: 'create a user'});
})

module.exports =  router;
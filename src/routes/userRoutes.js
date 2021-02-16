const { userController } = require('../controllers');
const {Router} = require('express');
const router = Router();

// get all users from users table
router.get('/', userController.getAll)

// get user from users table by id
router.get('/:userId', userController.getOne)

// update a user
router.patch('/:userId', userController.update)

// delete a user permanently
router.delete('/:userId', userController.delete)


module.exports = router;

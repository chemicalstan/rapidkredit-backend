const {Router} = require('express');
const router = Router();

router.get('/', (req, res)=>{
    return res.status(200).json({message: 'get all users from users table'});
})

router.get('/:userId', (req, res)=>{
    return res.status(200).json({message: 'get user from users table by id'});
})

router.patch('/:userId', (req, res)=>{
    return res.status(200).json({message: 'update a user'});
})

router.delete('/:userId', (req, res)=>{
    return res.status(200).json({message: 'delete a user'});
})


module.exports = router;
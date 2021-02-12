import {Router} from 'express';
const router = Router()

router.get('/users', (req, res)=>{
    res.status(200).json({message: 'get all users'})
})

router.post('/user')
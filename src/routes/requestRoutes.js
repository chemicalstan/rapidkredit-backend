const {Router} = require('express');

const router = Router();

router.get('/requests', (req, res)=>{
    return res.status(200).json({message: 'Welcome to requests page'})
})

module.exports = router
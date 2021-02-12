const {Router} = require('express');

const routes = Router();

routes.get('/bank-details', (req, res)=>{
    return res.status(200).json({message: 'Welcome to bank-details page'})
})
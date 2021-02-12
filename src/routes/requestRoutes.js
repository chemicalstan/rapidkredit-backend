const {Router} = require('express');

const routes = Router();

routes.get('/requests', (req, res)=>{
    return res.status(200).json({message: 'Welcome to requests page'})
})
const {Router} = require('express');

const router = Router();

router.get('/', (req, res)=>{
    return res.status(200).json({message: 'get all bank details'})
});

router.get('/:bankId', (req, res)=>{
    return res.status(200).json({message: 'get bank details by id'})
});

router.post('/', (req, res)=>{
    return res.status(200).json({message: 'add new bank details'})
});

router.patch('/:bankId', (req, res)=>{
    return res.status(200).json({message: 'edit bank details'})
});
router.delete('/:bankId', (req, res)=>{
    return res.status(200).json({message: 'delete bank details'})
});

module.exports = router;
const {Router} = require('express');
const authRoutes = require('./authRoutes');
const bankDetailRoutes = require('./bankDetailRoutes');
const userRoutes = require('./userRoutes');
const requestRoutes = require('./requestRoutes');


const router = Router();

router.use('/auth', authRoutes);
router.use('/users', userRoutes);
router.use('/bank-details', bankDetailRoutes);
router.use('/requests', requestRoutes);

module.exports = router;

import {Router} from 'express';
import authRoutes from './authRoutes';
import bankDetailRoutes from './bankDetailRoutes';
import userRoutes from './userRoutes';
import requestRoutes from './requestRoutes';


const router = Router();

router.use('/auth', authRoutes);
router.use('/users', userRoutes);
router.use('/bank-details', bankDetailRoutes);
router.use('/requests', requestRoutes);

export default router;

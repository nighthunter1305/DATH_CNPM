import express from 'express';
import { CouponRoutes } from '~/routes/CouponRoutes';
import { HomeRoutes } from '~/routes/HomeRoutes';
import { ProductRoutes } from '~/routes/ProductRoutes';
import { AuthRoutes } from '~/routes/AuthRoutes';

const router = express.Router();

router.use('/auth', AuthRoutes);
router.use('/home', HomeRoutes);
router.use('/product', ProductRoutes);
router.use('/coupon', CouponRoutes);

export const API = router;

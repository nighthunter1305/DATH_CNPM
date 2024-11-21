import express from 'express';
import { HomeController } from '~/controllers/HomeController';

const router = express.Router();

// add category route later
router.get('/', HomeController.getProducts);
router.get('/seller', HomeController.getProducts);

export const HomeRoutes = router;

import express from 'express';
import { HomeController } from '~/controllers/HomeController';
import { verify } from '~/middlewares/verify';

const router = express.Router();

// add category route later
router.get('/', verify, HomeController.getProducts);

export const HomeRoutes = router;

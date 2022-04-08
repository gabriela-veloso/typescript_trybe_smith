import { Router } from 'express';
import ProductsController from '../controllers/productsController';

const router = Router();

const productsController = new ProductsController();

router.get('/products', productsController.getAll);
router.post('/products', productsController.createProduct);

export default router;
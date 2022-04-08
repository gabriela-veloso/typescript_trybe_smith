import { Router } from 'express';
import UsersController from '../controllers/usersController';

const router = Router();

const usersController = new UsersController();

router.post('/users', usersController.createUser);

export default router;
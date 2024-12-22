import { Router } from 'express';
import { AuthController } from './authController';

const router = Router();
const authController = new AuthController();

router.post('/login', authController.login);
router.post('/register', authController.register);
router.post('/logout', authController.logout);
router.get('/session', authController.getSession);

export default router;
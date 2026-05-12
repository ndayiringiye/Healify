import express from 'express';
import userController from '../controllers/userController.js';
import authController from '../controllers/authController.js';
import { protect } from '../middlewares/auth.js';
import { 
  isManager, 
  isManagerOrAdmin 
} from '../middlewares/role.js';

const router = express.Router();

router.post('/first-manager', authController.createFirstManager);

router.use(protect);


router.post('/register', isManager, authController.register);
router.post('/login', authController.login);
router.post('/verify-otp', authController.verifyOTP);
router.post('/resend-otp', authController.resendOTP);
router.post('/forgot-password', authController.forgotPassword);
router.post('/reset-password', authController.resetPassword);
router.get('/', isManagerOrAdmin, userController.getAllUsers);

router.get('/:id', isManagerOrAdmin, userController.getUserById);

router.put('/:id', isManager, userController.updateUser);

router.patch('/:id/deactivate', isManager, userController.deactivateUser);

router.delete('/:id', isManager, userController.deleteUser);

export default router;
import express from 'express';
import {
  getAllUsers,
  getUserById,
  updateUser,
  deactivateUser,
  deleteUser
} from '../controllers/userController.js';
import {
  createFirstManager,
  login,
  register,
  verifyOTP,
  resendOTP,
  forgotPassword,
  resetPassword
} from '../controllers/authController.js';
import { protect } from '../middlewares/user/auth.js';
import { 
  isManager, 
  isManagerOrAdmin 
} from '../middlewares/user/role.js';

const router = express.Router();

router.post('/first-manager', createFirstManager);
router.post('/login', login);
router.post('/verify-otp', verifyOTP);
router.post('/resend-otp', resendOTP);
router.post('/forgot-password', forgotPassword);
router.post('/reset-password', resetPassword);

router.use(protect);   

router.post('/register', isManager, register);

router.get('/', isManagerOrAdmin, getAllUsers);
router.get('/:id', isManagerOrAdmin, getUserById);

router.put('/:id', isManager, updateUser);
router.patch('/:id/deactivate', isManager, deactivateUser);
router.delete('/:id', isManager, deleteUser);

export default router;
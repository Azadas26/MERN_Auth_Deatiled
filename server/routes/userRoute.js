import express from 'express';
import { LoginValidation, registerValidation } from '../middlewares/authValidation.js';
import { getUserDetails, isUserauthenticatedornot, login, logout, register, resetPassword, sendRestOtp, sendVerificationOtp, verifyEmail } from '../middlewares/authControllers.js';
import { isuserauth } from '../middlewares/isUserAuth.js';

const router = express.Router();

router.post('/register', registerValidation, register);
router.post('/login', LoginValidation, login);
router.get('/logout', logout);
router.post('/send-otp', isuserauth, sendVerificationOtp);
router.post('/verify-email', isuserauth, verifyEmail);
router.get('/is-auth', isuserauth, isUserauthenticatedornot);
router.post('/send-reset-otp', sendRestOtp);
router.post('/reset-password', resetPassword);
router.get('/user-details', isuserauth, getUserDetails)

export default router;
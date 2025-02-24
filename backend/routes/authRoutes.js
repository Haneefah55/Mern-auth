import express from 'express'
import { loginUser, registerUser, logoutUser, verifyEmail, forgetPassword, resetPassword, checkAuth, updateUser } from '../controller/authController.js'
import { verifyToken } from '../middleware/verifyToken.js'


const router = express.Router()


router.get('/check-auth', verifyToken, checkAuth)


//post request to /api/auth/login to login a user
router.post('/login', loginUser)

// post request to /api/auth/signup to register a new user
router.post('/signup', registerUser)

//post request to /api/auth/verifyEmail to verify user emails
router.post('/verify-email', verifyEmail)

// post request to /api/auth/logout to logout a user
router.post('/logout', logoutUser)


//post request to /api/auth/forget-password
router.post('/forget-password', forgetPassword)

//post request to /api/auth/reset-password/:token
router.post('/reset-password/:token', resetPassword)


router.put('/edit-user/:id', updateUser)



export default router
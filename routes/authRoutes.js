import express from 'express'
import {
  signup,
  login,
  verifyEmail,
  protect,
  logOut,
  forgotPassword,
  resetPassword,
} from '../controllers/authController.js'

const router = express.Router()
// Define routes for user authentication
router.post('/signup', signup)
router.post('/login', login)
router.get('/verify/:token', verifyEmail)
router.post('/logout', logOut)
router.post('/forgotPassword', forgotPassword)
router.patch(
  '/resetPassword/:token',
  (req, res, next) => {
    next()
  },
  resetPassword
)
router.get('/test', protect, (req, res) => {
  res.status(200).json({
    status: 'success',
    message: 'You are authenticated and can access this route.',
  })
})

export default router

import { Router } from 'express'
import * as authController from '../controllers/auth.controller.js'
import { checkDuplicateUsernameOrEmail } from '../middlewares/verifySignup.js'
import { checkrolesExisted } from '../middlewares/verifySignup.js'

const router = Router()

router.post(
  '/signin',
  [checkDuplicateUsernameOrEmail, checkrolesExisted],
  authController.signIn
)
router.post('/signup', authController.signUp)

export default router

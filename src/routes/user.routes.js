import { Router } from 'express'
import * as userController from '../controllers/users.controller.js'
import { isAdmin, verifyToken } from '../middlewares/authJwt.js'
import { checkrolesExisted } from '../middlewares/verifySignup.js'

const router = Router()

router.post(
  '/',
  [verifyToken, isAdmin, checkrolesExisted],
  userController.createUser
)

export default router

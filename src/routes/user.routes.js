import { Router } from 'express'
import * as userController from '../controllers/users.controller.js'
import { isAdmin, verifyToken } from '../middlewares/authJwt.js'

const router = Router()

router.post('/', [verifyToken, isAdmin], userController.createUser)

export default router

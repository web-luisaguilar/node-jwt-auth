import { Router } from 'express'
import * as productController from '../controllers/products.controller.js'
import * as authJwt from '../middlewares/authJwt.js'

const router = Router()

router.post(
  '/',
  [authJwt.verifyToken, authJwt.isModerator],
  productController.createProduct
)

router.get('/', productController.getProducts)

router.get('/:productId', productController.getProductById)

router.put(
  '/:productId',
  [authJwt.verifyToken, authJwt.isAdmin],
  productController.updateProductById
)

router.delete(
  '/:productId',
  [authJwt.verifyToken, authJwt.isAdmin],
  productController.deleteProductById
)

export default router

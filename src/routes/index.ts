import {Router} from 'express'
import {ProductController} from '../controller/ProductController'

const routes = Router()

const productController = new ProductController()

routes.post('/', productController.create)
routes.get('/', productController.show)

export default routes;
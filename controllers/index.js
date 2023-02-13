
import loggerMiddleware from '../middleware/logger.js'
import productsController from './product.controllers.js'

export default async function intiRoyter(app) {
    try {
    app.use(loggerMiddleware)

    app.use('/products', productsController)

    } catch (error) {
        console.error('intiRoyter', error) 
    }
}

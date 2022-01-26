import {Router} from 'express'
import frontRouter from './front.route'
import chatRouter from './chat.route'

const routes = Router()

routes.use('/front', frontRouter)
routes.use('/chat', chatRouter)


export default routes
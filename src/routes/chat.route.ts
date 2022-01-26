import {Router} from 'express'
import ChatMessage from '../events/chat_message.event'

const chatRouter = Router()

chatRouter.get('/', (req, res, next) => {
    const io = req.io

    new ChatMessage(io).pub('deu bom')
    res.send()
})

export default chatRouter
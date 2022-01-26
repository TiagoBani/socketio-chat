import {Router} from 'express'
import ChatMessage from '../events/chat_message.event'

const chatRouter = Router()

chatRouter.post('/', (req, res, next) => {
    const {io, body} = req

    new ChatMessage(io).pub(body?.message, body?.socketId)
    res.send()
})

export default chatRouter
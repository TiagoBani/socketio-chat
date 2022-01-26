
import { createServer } from 'http'

import express, { Request } from 'express'
import { Server } from 'socket.io'

import EventHandler from './handlers/events.handler'
import routes from './routes'
import { AddressInfo } from 'net'

const SERVER_PORT = process.env.NODE_PORT || 3000
try{
    const app = express()
    const server = createServer(app)
    
    const io = new Server(server)
    const eventHandler = new EventHandler()
    eventHandler.listen(io)

    app.use((req, res, next) => {
        req.io = io
        next()
    })

    app.use(routes)

    server.listen(SERVER_PORT, () => {
        const {address, port} = server.address() as AddressInfo
        console.log(`listening on ${address}:${port}`)
    })
}catch(error){
    console.log('Express error')
    console.log(error)
}

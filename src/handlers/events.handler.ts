import { Server, Socket } from "socket.io";
import ChatMessageEvent from "../events/chat_message.event";
import BroadcastEvent from '../events/broadcast.event'

type iEvents = {
    ChatMessage: ChatMessageEvent;
    Broadcast: BroadcastEvent;
}

export default class EventHandler {

    io: Server
    events: iEvents

    constructor(){
        this.io = {} as Server
        this.events = {} as iEvents
    }

    listen(io: Server){
        this.io = io

        this.io.on('connection', this.connection.bind(this));
        this.setEvent.call(this)
    }

    setEvent(){
        this.events = {
            ChatMessage: new ChatMessageEvent(this.io),
            Broadcast: new BroadcastEvent(this.io)
        }
    }

    connection(socket: Socket){
        const socketId = socket.id
        console.log(`User connected: ${socketId}`)

        socket.on('chat message', (msg) => {
            this.events.ChatMessage.sub(msg)
            //Envia para todos que escutam o evento 
            this.events.ChatMessage.pub(msg)

            // Envia para todos
            this.events.Broadcast.pub({ 
                someProperty: 'some value', 
                otherProperty: 'other value' 
            })
        })

        // Inicia o chat enviando a mensagem
        this.events.ChatMessage.pub(`hi ${socketId}`, socketId)
    }
}
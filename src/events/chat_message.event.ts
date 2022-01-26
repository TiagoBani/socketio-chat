import BaseEvent from "./base.event";

export default class ChatMessage extends BaseEvent {

    sub(message: string){
        console.log('message: ' + message);
    }

    pub(message: string, socketId?: string | string[]){
        if(!!socketId && socketId?.length > 0) 
            return this.io.to(socketId).emit('chat message', message)

        this.io.emit('chat message', message);
    }
}
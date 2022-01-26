import BaseEvent from "./base.event";

export default class BroadcastEvent extends BaseEvent {

    pub(obj: object, socketId?: string | string[]){
        if(!!socketId && socketId?.length > 0) 
            return this.io.to(socketId).emit('broadcast', obj)
        
        this.io.emit('broadcast', obj)
    }
}
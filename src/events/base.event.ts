import { Server } from "socket.io";

export default class BaseEvent {

    io: Server

    constructor(io: Server){
        this.io = io
    }
}
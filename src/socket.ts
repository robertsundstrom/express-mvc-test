import * as socketio from "socket.io";

let io: SocketIO.Server = null!;

export function init(server: any) {
    io = socketio(server);
}

export interface ISocket {
    emit(event: string, ...args: string[]): void;
    on(event: string, listener: () => void): void;
}

export class Socket implements ISocket {
    public emit(event: string, ...args: string[]) {
        io.emit(event, ...args);
    }

    public on(event: string, listener: () => void) {
        io.on(event, listener);
    }
}

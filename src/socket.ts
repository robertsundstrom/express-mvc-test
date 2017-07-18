import * as socketio from "socket.io";

let io: SocketIO.Server = null!;

export function init(server: any) {
    io = socketio(server);
}

export class Socket {
    public emit(event: string, ...args: string[]) {
        io.emit(event, ...args);
    }

    public on(event: string, listener: () => void) {
        io.on(event, listener);
    }
}

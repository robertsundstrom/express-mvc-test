import { autoinject, Controller, delete_, get, inject, post, put, route } from "@robertuzzu/express-mvc";
import { Socket } from "../socket";
import { guid } from "../utils";

interface ITodo {
    id?: string;
    text: string;
    isDone: boolean;
}

@route("/todos")
@autoinject() // @inject(Socket)
export default class TodosController /* extends Controller */ {
    private static todos: any = {};
    private socket: Socket;

    constructor(socket: Socket) {
        // super();

        this.socket = socket;
    }

    @get()
    public getAll() {
        return Object.values(TodosController.todos);
    }

    @get(":id")
    public getItem(id: string) {
        return TodosController.todos[id];
    }

    @post()
    public postItem(data: any) {
        data.id = guid();
        TodosController.todos[data.id] = data;
        this.socket.emit("todoCreated", data.id);
        return data;
    }

    @put(":id")
    public putItem(id: string, data: any) {
        TodosController.todos[id] = data;
        this.socket.emit("todoUpdated", id);
        return id;
    }

    @delete_(":id")
    public deleteItem(id: string) {
        delete TodosController.todos[id];
        this.socket.emit("todoDeleted", id);
        return id;
    }
}

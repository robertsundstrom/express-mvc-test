import * as ko from "knockout";
import "knockout-es5";
import * as io from "socket.io";

import { Http, HttpError } from "Http";

interface ITodo {
    id?: string;
    text: string;
    isDone: boolean;
}

class Todos {
    public static get(id?: string) {
        if (typeof id === "undefined") {
            return Http.get<ITodo[]>(`/api/todos`);
        } else {
            return Http.get<ITodo>(`/api/todos/${id}`);
        }
    }
    public static add(todo: ITodo) {
        return Http.post<ITodo>(`/api/todos`, todo);
    }
    public static update(todo: ITodo) {
        return Http.put<number>(`/api/todos/${todo.id}`, todo);
    }
    public static delete(id: string) {
        return Http.delete<void>(`/api/todos/${id}`);
    }
}

// tslint:disable-next-line:max-classes-per-file
class App {
    public nextItem: string = "";
    public todos: ITodo[] = [];

    private socket: SocketIOClient.Socket;

    constructor() {
        this.connect();
    }

    public async add() {
        await Todos.add({ text: this.nextItem, isDone: false });
    }

    public async delete(item: ITodo) {
        await Todos.delete(item.id!);
    }

    get remainingItems() {
        return this.todos.filter((item: ITodo) => !item.isDone).length;
    }

    public async markDone(item: ITodo) {
        item.isDone = !item.isDone;
        await Todos.update(item);
    }

    public async itemChanged(item: ITodo) {
        await Todos.update(item);
    }

    private addItem(item: ITodo) {
        item = ko.track(item);
        ko.getObservable(item, "isDone").subscribe(() => {
            Todos.update(item);
        });
        this.todos.push(item as ITodo);
    }

    private async connect() {
        this.socket = io.connect("http://localhost:3000");
        this.socket.on("connect", this.onConnected.bind(this));
        this.socket.on("disconnect", this.onDisconnected.bind(this));

        this.socket.on("todoCreated", async (id: any) => {
            const item = await Todos.get(id);
            this.addItem(item as ITodo);
        });
        this.socket.on("todoDeleted", (id: any) => {
            const item = this.todos.find((i) => i.id === id);
            this.todos.remove(item as ITodo);
        });
        this.socket.on("todoUpdated", async (id: any) => {
            const item = this.todos.find((i) => i.id === id);
            const index = this.todos.indexOf(item as ITodo);
            const target = this.todos[index];
            const source = (await Todos.get(id)) as ITodo;
            Object.assign(target, source);
        });

        const todos = await Todos.get();
        for (const todo of todos as ITodo[]) {
            this.addItem(todo as ITodo);
        }
    }
    private onConnected() {
        console.log("Connected");
    }
    private onDisconnected() {
        console.log("Disconnected");
    }
}

const app = new App();

ko.track(app);
ko.applyBindings(app);

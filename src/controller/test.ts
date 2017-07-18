import { Controller, get, post, route } from "@robertuzzu/express-mvc";

export default class Test {
    @get()
    public get() {
        return "Hello";
    }

    @get(":id")
    public get2(id: string) {
        return id;
    }

    @post()
    public post(data: any) {
        return data;
    }
}

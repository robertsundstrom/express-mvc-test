import { Controller, get, route } from "@robertuzzu/express-mvc";
import * as path from "path";

export default class HomeController extends Controller {
    constructor() {
        super();
    }

    public index(params: any) {
        // throw new Error("Hey!");
        return this.sendFile(path.join(process.cwd(), "public/index2.html"));
    }
}

import { Controller, get, route } from "@robertuzzu/express-mvc";
import * as path from "path";

@route("/")
export default class HomeController extends Controller {
    constructor() {
        super();
    }

    @get("/")
    public index(params: any) {
        // throw new Error("Hey!");
        return this.sendFile(path.join(process.cwd(), "public/index.html"));
    }
}

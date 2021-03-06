import {  mapRoute, mvc } from "@robertuzzu/express-mvc";
import * as ioc from "@robertuzzu/express-mvc/dist/ioc";

import * as bodyParser from "body-parser";
import * as express from "express";
import * as http from "http";
import * as https from "https";

import { init, Socket } from "./socket";

const app = express();
app.use(bodyParser());

app.use(express.static("public"));

mvc(app);

mapRoute(app, "", "/:controller/:action/:id?", {
    controller: "home",
    // tslint:disable-next-line:object-literal-sort-keys
    action: "index",
});

const server = http.createServer(app);

// ioc.registerTransient(Socket);

init(server);

server.listen(3000, () => {
    console.log("Example app listening on port 3000!");
});

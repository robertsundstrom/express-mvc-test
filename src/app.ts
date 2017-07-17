import {  mvc } from "@robertuzzu/express-mvc";

import * as bodyParser from "body-parser";
import * as express from "express";
import * as http from "http";
import * as https from "https";
import * as socketio from "socket.io";

import { init } from "./socket";

const app = express();
app.use(bodyParser());

app.use(express.static("public"));

mvc(app);

const server = http.createServer(app);

init(server);

server.listen(3000, () => {
    console.log("Example app listening on port 3000!");
});

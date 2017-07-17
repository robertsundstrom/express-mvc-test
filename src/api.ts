import * as express from "express";
const router = express.Router();

//import { Skitgubbe } from "./lib/skitgubbe";

/*

const context = new Skitgubbe();

router.post("/join", (req: express.Request, res: express.Response) => {
    const result = req.query.name;
    const obj = context.join(name);
    req.io.sockets.emit("userJoined", obj);
    res.send(obj);
});

router.post("/leave", (req: express.Request, res: express.Response) => {
    const result = req.query.token;
    const obj = context.join(name);
    req.io.sockets.emit("userLeft", obj);
    res.end();
});

router.get("/participants", (req: express.Request, res: express.Response) => {
    const users = context.participants;
    res.send(users);
});

router.post("/take", (req: express.Request, res: express.Response) => {
    const obj = context.join(name);
    req.io.sockets.emit("cardTaken");
    res.end();
});

router.post("/put", (req: express.Request, res: express.Response) => {
    const cardId = req.query.cardId;
    const obj = context.put(cardId);
    req.io.sockets.emit("cardPut");
    res.end();
});

// gameStarted
// gameAbort
// gameEnded
// gameWon
// cardPut
// cardTaken
// turnChanged
// participantJoined
// participantLeft

/*
router.get("/foo", (req: express.Request, res: express.Response) => {
    const result = req.query.text;
    req.io.sockets.emit("update", result);
    res.send("Test");
});
*/

export default router;

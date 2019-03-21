import {Express, Request, Response} from "express";
import * as insidejs from "./insidejs";
import express = require("express");

class Main {
    public static start() {
        const app: Express = express();

        app.get("/", (req: Request, res: Response) => {
            res.status(200).send({msg: "Hello World!"})
        });

        app.get("/inside-js", (req: Request, res: Response) => {
            res.status(200).send({msg: insidejs.inside_js()})
        });

        app.listen(4000, () => {
            console.log("Listing on port 4000");
        })
    }
}

Main.start();


import {Express, Request, Response} from "express";
import express = require("express");

class Main {
    public static start() {
        const app: Express = express();

        app.get("/", (req: Request, res: Response) => {
            res.status(200).send({msg: "Hello World!"})
        });

        app.listen(4000, () => {
            console.log("Listing on port 4000");
        })
    }
}

Main.start();


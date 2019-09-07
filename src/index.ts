import * as express from "express";
import * as bodyParser from  "body-parser";
import {NextFunction, Request, Response} from "express";
import { Routes } from "./routes";


export const storage = {
    urls: [
        {
            "id":1,
            "oriurl":"http://www.google.com.my",
            "shorturl":"https://bit.ly/1dj3Jfc"
        },
        {
            "id":2,
            "oriurl":"http://www.facebook.com",
            "shorturl":"https://bit.ly/IKFRtL"
        }
    ]
}

export const srcPath = __dirname
const PORT = process.env.PORT || 3000;

// create and setup express app
const app = express();
app.use(bodyParser.json());
app.use(express.static(__dirname + '\\public'));


// register routes
Routes.forEach(route => {
    (app as any)[route.method](route.route, (req: Request, res: Response, next: Function) => {
        const result = (new (route.controller as any))[route.action](req, res, next);
        if (result instanceof Promise) {
            result.then(result => result !== null && result !== undefined ? res.send(result) : undefined);

        } else if (result !== null && result !== undefined) {
            res.json(result);
        }
    });
});

// start express server
app.listen(PORT);
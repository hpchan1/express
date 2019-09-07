import {NextFunction, Request, Response} from "express";
import { storage } from "..";

export class TestController {
    async hello(request: Request, response: Response, next: NextFunction) {
        response.send("Hello World!")
    }
    async links(request: Request, response: Response, next: NextFunction){
        let url = {}
        for(let u of storage.urls){
            if(u.id === parseInt(request.params.id)){
                url = u.id
                break
            }
        }
        response.json(url)
    }
}
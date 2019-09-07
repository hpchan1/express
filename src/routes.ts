import {TestController} from "./controller/TestController";

export const Routes = [{
    method: "get",
    route: "/hello",
    controller: TestController,
    action: "hello"
},{
    method: "get",
    route: "/links/:id",
    controller: TestController,
    action: "links"
}, 
];
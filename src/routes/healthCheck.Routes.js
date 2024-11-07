import { Router } from "express";
import { healthCheck } from "../controllers/healthCheck.controller.js";
const checkRouter = Router();


checkRouter.route("/test").get(healthCheck);
///////////////////////////////////////////////////////////////////
//i can use this below route as a middleware (kind of) in my app js, i f i donot wan't to use .get() request in the app.js so i specified the .get() in the route file itself so that when i have to use the route in app.js i can just use app.use() 

//here checkRouter will do the run get() request healthCheck on the "/" route 
checkRouter.get("/",healthCheck);
/************************************************************ */

// checkRouter.route("/api/v1/gethealth").get(healthCheck);


export default  checkRouter ;

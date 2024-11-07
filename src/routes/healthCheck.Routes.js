import { Router } from "express";
import { healthCheck } from "../controllers/healthCheck.controller.js";
const checkRouter = Router();
//
// checkRouter.route("/").get(healthCheck);
checkRouter.route("/test").get(healthCheck);
// checkRouter.route("/api/v1/gethealth").get(healthCheck);


export default  checkRouter ;

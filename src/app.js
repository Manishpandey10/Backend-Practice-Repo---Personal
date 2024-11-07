import express from "express";
import cors from "cors"
import CheckRouter from "./routes/healthCheck.Routes.js"

const app= express();

app.use(cors({
    origin:process.env.CORS_ORIGIN,credential:true
}))
//common middlewares i used here

app.use(express.json({limit:"24kb"}))
app.use(express.urlencoded({extended:true, limit:"20kb"}))
app.use(express.static("public"))


//written some routes in here below
//middle ware to health check , imported the route not the controllers
/****************************************** */
//In app.js, when we use app.use("/api/v1/gethealth", CheckRouter), we're telling Express to use the CheckRouter for any requests that start with the /api/v1/gethealth path. This means that the CheckRouter will handle all routes under that path, not just the root (/) path.
// in this app.use checkROuter will handle every request in this "api/...." ,
app.use("/api/v1/gethealth",CheckRouter)
/*********************************************** */

app.get("/test2",(req,res)=>{res.send("hello from app.js")})
//checking the get request onmy postman^|^

export default app
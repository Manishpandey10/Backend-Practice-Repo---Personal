import express from "express";
import CheckRouter from "./routes/healthCheck.Routes.js"

const app= express();


//common middlewares i used here

app.use(express.json({limit:"24kb"}))
app.use(express.urlencoded({extended:true, limit:"20kb"}))
app.use(express.static("public"))


//written some routes in here below
//middle ware to health check , imported the route not the controllers
app.get("/test",CheckRouter)
app.get("/test2",(req,res)=>{res.send("hello from app.js")})

export default app
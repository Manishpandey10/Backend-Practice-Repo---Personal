import dotenv from "dotenv";
import app from "./app.js";
import connectToDb from "./db/index.js";

dotenv.config({
    path:"./.env"
})
const PORT = process.env.PORT

connectToDb().
then(()=>{
    app.listen (PORT, ()=>{
        console.log(`\n this is from index.js src \n run you lil bi*ch on ${PORT}
        \n ............`)
    })
})
.catch((err)=>{console.log("there is a error bhsdk index,js");
})



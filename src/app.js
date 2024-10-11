import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors"; 

// cookie-parser is used to access the cookies securely in user's browser which only server can use or read 
const app = express()

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials:true
}))

app.use(express.json({limit:"16kb"})) // accepting json
app.use(express.urlencoded({extended:true , limit:"16kb"}))
app.use(express.static("public")) // to strore file folder in my server , these are public assets
app.use(cookieParser())


export default app;

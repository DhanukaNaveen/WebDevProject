import express from "express";
import mongoose from "mongoose";
import bodyparser from "body-parser";

import studentRouter from "./routers/studentRouter.js";
import userRouter from "./routers/userRouter.js";
import jwt from "jsonwebtoken"


const app = express();
app.use(bodyparser.json()); //app.use for add middleware

app.use(
    (req,res,next)=>{
        const value =req.header("authorization");//get token
        if (value!=null){
            const token=value.replace("Bearer ","");//remove bearer from token  
            
            jwt.verify(token,"cbc-6503",(err,decoded)=>{
                if(decoded==null){res.status(403).json({message:"unauthorized"})}
                
                else{
                    req.user=decoded;//add user object in request
                    next();
                }
            })
        }
        else{
            next();//pass request to default router
        }
        
        
    }
    

)//middleware,for check token,add user object in request,for authentication

const connectionString = "mongodb+srv://admin:123@cluster0.ucewcye.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
mongoose.connect(connectionString).then(
    ()=>{
        console.log("database connected"

        )
    }
).catch(
    ()=>{
        console.log("failed to connect database");
    }
)

    

app.use("/students",studentRouter);
app.use("/users",userRouter);

app.listen(5000,()=>{
    console.log("server started");
})
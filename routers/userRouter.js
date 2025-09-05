import express from "express";

import { createUser, loginUser } from "../controllers/userController.js";
import { get } from "mongoose";

const userRouter = express.Router();

userRouter.post("/",createUser)
userRouter.post("/login",loginUser)
userRouter.get("/",getUser)//get user info by token
userRouter.post("/google-login", googleLogin)
userRouter.post("/send-otp", sendOTP)
userRouter.post("/reset-password",resetPassword)

export default userRouter

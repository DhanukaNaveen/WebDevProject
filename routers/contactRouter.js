import express from "express";
import { submitContact, getContacts } from "../controllers/contactController.js";

const contactRouter = express.Router();
contactRouter.post("/", submitContact);
contactRouter.get("/", getContacts);

export default contactRouter;
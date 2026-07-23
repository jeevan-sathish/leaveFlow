import { Router } from "express";
import { sendMessage } from "../controller/cypress.sendMessage.js";

export const messageRoute = Router();
messageRoute.get("/data", sendMessage);

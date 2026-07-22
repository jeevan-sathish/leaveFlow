import { Router } from "express";
import { userController } from "../controller/user.controller.js";
export const userRouter = Router();
userRouter.get("/user", userController);

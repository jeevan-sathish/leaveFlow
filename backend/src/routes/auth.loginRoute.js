import { Router } from "express";
import { loginController } from "../controller/auth.loginController.js";
const loginRoute = Router();
loginRoute.post("/auth/login", loginController);

export { loginRoute };

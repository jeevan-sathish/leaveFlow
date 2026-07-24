import express from "express";
import cors from "cors";
import { loginRoute } from "./routes/auth.loginRoute.js";

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Welcome");
});

app.use(loginRoute);

export default app;

import express from "express";
import cors from "cors";
import { userRouter } from "./routes/user.route.js";

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Welcome");
});

app.use("/api", userRouter);

export default app;

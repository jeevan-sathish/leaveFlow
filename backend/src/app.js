import express from "express";
import cors from "cors";
import { messageRoute } from "./routes/cypress.messageRoute.js";

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Welcome");
});

app.use("/", messageRoute);

export default app;

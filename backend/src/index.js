import "dotenv/config";
import app from "./app.js";
import { pool } from "./database/db.js";

const PORT = process.env.PORT || 3000;

async function startserver() {
  try {
    await pool.query("SELECT NOW()");
    console.log("database connected");
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
}

startserver();

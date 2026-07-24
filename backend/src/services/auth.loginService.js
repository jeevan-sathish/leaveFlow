import { pool } from "../database/db.js";
import bcrypt from "bcrypt";
import { StatusCodes } from "http-status-codes";
import {
  generateAccessToken,
  generateRefreshToken,
} from "../jwtHandler/lauth.jwtHelper.js";

async function verifyUserExist(name, email, password) {
  const existing_user = await pool.query(
    "SELECT id,name,email from users WHERE email=$1",
    [email],
  );
  if (existing_user.rows.length > 0) {
    const users = existing_user.rows[0];
    const access_token = generateAccessToken(users);
    const refresh_token = generateRefreshToken(users);

    return {
      status: true,
      result: "account exist",
      access_token: access_token,
      refresh_token: refresh_token,
    };
  } else {
    const hashPass = await bcrypt.hash(password, 10);
    await pool.query("INSERT INTO users(name,email,password)VALUES($1,$2,$3)", [
      name,
      email,
      hashPass,
    ]);

    return {
      status: true,
      result: "account was created",
    };
  }
}
export { verifyUserExist };

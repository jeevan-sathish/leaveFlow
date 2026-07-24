import jwt from "jsonwebtoken";
import "dotenv/config.js";
function generateAccessToken(user) {
  if (user) {
    const token = jwt.sign(
      {
        id: user.id,
        email: user.email,
        role: user.role,
      },
      process.env.MY_SECRET_KEY,
      {
        expiresIn: process.env.JWT_EXPIRES_IN,
      },
    );

    return token;
  }
}

export { generateAccessToken };

function generateRefreshToken(user) {
  if (user) {
    const refreshToken = jwt.sign(
      {
        id: user.id,
      },
      process.env.REFRESH_SECRET_KEY,
      {
        expiresIn: process.env.REFRESH_EXPIRES_IN,
      },
    );

    return refreshToken;
  }
}

export { generateRefreshToken };

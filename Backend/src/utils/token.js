const jwt = require("jsonwebtoken");

function generateToken(userId,res) {
  try {
    const token = jwt.sign(
        { userId },
        process.env.JWT_SECRET,
        { expiresIn: "3d" }
      );
      
      res.cookie("token", token, {
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
        maxAge: 3 * 24 * 60 * 60 * 1000,
        httpOnly: true,
      });
    return token;
  } catch (error) {
    console.error("Failed to generate token:", error.message);
    throw error;
  }
}

module.exports = { generateToken };

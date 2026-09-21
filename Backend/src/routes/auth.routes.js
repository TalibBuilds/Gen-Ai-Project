const express = require("express");
const AuthRoutes = express.Router();
const { register, login } = require("./auth.controller");

AuthRoutes.post("/register", register);
AuthRoutes.post("/login", login);

module.exports = AuthRoutes;

const express = require("express");
const app = express();
const cors = require("cors");
const AuthRoutes = require("./routes/auth.routes");
const cookieparser = require('cookie-parser')

app.use(express.json());
app.use(cors())
app.use(cookieparser())

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/api/auth", AuthRoutes);

module.exports = app;
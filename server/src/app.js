import express from "express";
const app = express();
import ("./database/conn.js");
//const cors = require("cors");
// const path = require("path");
// const auth = require("./routes/auth");
// const list = require("./routes/list");
// app.use(express.json());
// app.use(cors());

// app.use("/api/v1", auth);
// app.use("/api/v2", list);

app.get("/", (req, res) => {
    res.send("Hello");
//  app.use(express.static(path.resolve(__dirname, "frontend", "build")));
//  res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
});

app.listen(1000, () => {
  console.log("Server Started");
});
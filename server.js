const express = require("express");
const app = express();

app.get("/get", (req, res) => {
    console.log("Responding......");
  res.send("Server is running");
})

app.listen(4000,() => {
  console.log("Server started");
});

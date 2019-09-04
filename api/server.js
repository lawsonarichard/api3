const express = require("express");
const server = express();

server.get("/", (req, res) => {
  res.send("Welcome to the Home Page");
});

module.exports = server;

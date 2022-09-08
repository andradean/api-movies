const express = require("express");
const { hasConection } = require("./database");

const server = express();
hasConection();
server.use(express.json());

server.listen(3000, () => {
  console.log("server on");
});

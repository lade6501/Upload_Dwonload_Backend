const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const setRoutes = require("./routes");

const server = express();
server.use(express.json());
server.use(
  express.urlencoded({
    extended: true,
  })
);

server.use(cors());
server.use(bodyParser.json());

setRoutes(server);

module.exports = { server };

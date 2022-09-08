const express = require("express");
const routes = express.Router();
const genderController = require("../controller/Gender");

routes.get("/genero", genderController.listAll);

module.exports = routes;

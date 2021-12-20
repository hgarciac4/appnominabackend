const express = require("express");
const users = require("./users/router");
const permisos = require("./Permisos/router");
const vacaciones = require("./Vacaciones/router");

const api = express();

api.use("/users", users);
api.use("/permisos", permisos);
api.use("/vacaciones", vacaciones);

module.exports = api;
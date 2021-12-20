const express = require("express");
const {list, createVacaciones} = require("./controller");

const router = express.Router();

router.route("/").get(list).post(createVacaciones);

module.exports = router;
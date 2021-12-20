const express = require("express");
const {list, createPermiso} = require("./controller");

const router = express.Router();

router.route("/").get(list).post(createPermiso);

module.exports = router;
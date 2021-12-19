const express = require("express");
const {list, createUser} = require("./controller");

const router = express().Router();

router.route("/").get(list).post(createUser);

module.exports = router;
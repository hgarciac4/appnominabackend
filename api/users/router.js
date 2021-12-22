const express = require("express");
const {list, createUser, deleteUser, updateUser, listOne} = require("./controller");

const router = express.Router();

router.route("/").get(list).post(createUser);

router.route("/:id").get(listOne).put(updateUser).delete(deleteUser);

module.exports = router; 
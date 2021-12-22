const express = require("express");
const {list, createPermiso, updatePermiso, deletePermiso} = require("./controller");

const router = express.Router();

router.route("/").get(list).post(createPermiso);

router.route("/:id").put(updatePermiso).delete(deletePermiso);

module.exports = router;
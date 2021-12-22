const express = require("express");
const {list, createVacacion, updateVacacion, deleteVacacion} = require("./controller");

const router = express.Router();

router.route("/").get(list).post(createVacacion);

router.route("/:id").put(updateVacacion).delete(deleteVacacion);

module.exports = router;
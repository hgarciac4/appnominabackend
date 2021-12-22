const express = require("express");
const {list, createReportePago, deleteReportePago, updateReportePago} = require("./controller");

const router = express.Router();

router.route("/").get(list).post(createReportePago);

router.route("/:id").get().put(updateReportePago).delete(deleteReportePago);

module.exports = router; 
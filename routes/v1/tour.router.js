const express = require("express");
const getCheapest = require("../../controller/tours/getCheapest");
const getTrending = require("../../controller/tours/getTrending");
const updateById = require("../../controller/tours/updateById");
const router = express.Router();

router.route("/trending").get(getTrending);
router.route("/cheapest").get(getCheapest);

router.route("/:id").patch(updateById);

module.exports = router;

const express = require("express");
const router = express.Router();

const { Index } = require("../controllers/home_pages_controllers");

router.route("/").get(Index);

module.exports = router;

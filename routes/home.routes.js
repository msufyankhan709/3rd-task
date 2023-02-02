const express = require("express");
const router = express.Router();
const home = require("../controllers/homeController");
router.get("/", home.homeController);
// router.get("/order", home.orderViewController);

module.exports = router;

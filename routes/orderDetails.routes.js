const express = require("express");
const router = express.Router();
const orderDetails = require("../controllers/gerOrderDetails");

router.get("/symbols", orderDetails.getOrdersU1Controller);
router.get("/u2/order", orderDetails.getOrdersU2Controller);

module.exports = router;

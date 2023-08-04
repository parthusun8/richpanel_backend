const express = require("express");

const billingRouter = require("../controllers/billing.controller");


const router = express.Router();

router.get("/getLatestOffers", billingRouter.getLatestOffers);

module.exports = router;
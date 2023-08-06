const express = require("express");

const billingRouter = require("../controllers/billing.controller");


const router = express.Router();

router.get("/getLatestOffers", billingRouter.getLatestOffers);
router.get("/paymentIntent", billingRouter.paymentIntent);
router.post("/subscribe", billingRouter.subscribe);
router.post("/cancel", billingRouter.cancel);

module.exports = router;
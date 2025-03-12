const express = require("express");
const router = express.Router();
const { claimCoupon } = require("../middleware/abusePrevention");

const coupons = require("../data/coupons");

let currentCouponIndex = 0;

router.post("/claim", claimCoupon, (req, res) => {
  const coupon = coupons[currentCouponIndex];
  currentCouponIndex = (currentCouponIndex + 1) % coupons.length;

  res.status(200).json({ success: true, message: "Coupon claimed!", coupon });
});

module.exports = router;

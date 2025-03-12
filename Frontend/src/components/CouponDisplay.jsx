import React from "react";

const CouponDisplay = ({ coupon }) => {
  return coupon ? <h2>Your Coupon: {coupon}</h2> : <h2>No coupon assigned yet.</h2>;
};

export default CouponDisplay;

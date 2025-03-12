import React, { useState } from "react";
import { claimCoupon } from "../api/apiService";
import CouponDisplay from "../components/CouponDisplay";
import ClaimButton from "../components/ClaimButton";

const Home = () => {
  const [coupon, setCoupon] = useState(null);
  const [message, setMessage] = useState("");

  const handleClaim = async () => {
    const result = await claimCoupon();
    if (result.success) {
      setCoupon(result.coupon);
      setMessage(result.message);
    } else {
      setMessage(result.message);
    }
  };

  return (
    <div>
      <h1>Coupon Distribution</h1>
      {message && <p>{message}</p>}
      <CouponDisplay coupon={coupon} />
      <ClaimButton onClick={handleClaim} />
    </div>
  );
};

export default Home;

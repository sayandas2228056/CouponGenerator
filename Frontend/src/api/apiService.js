import axios from "axios";

const API_URL = "http://localhost:5000/api/coupons";

export const claimCoupon = async () => {
  try {
    const response = await axios.post(`${API_URL}/claim`);
    return response.data;
  } catch (error) {
    return { success: false, message: error.response?.data?.message || "Error claiming coupon" };
  }
};

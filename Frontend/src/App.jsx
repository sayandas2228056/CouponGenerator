import React, { useState } from "react";
import { claimCoupon } from "./api/apiService";
import Footer from "./components/Footer";

function App() {
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
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-900 via-black to-gray-900 text-white p-6 font-mono">
      <div className="w-full max-w-md bg-gray-900 bg-opacity-80 p-8 rounded-2xl shadow-lg text-center backdrop-blur-md border border-gray-700">
        <h1 className="text-3xl font-extrabold mb-6 text-blue-300">Exclusive Coupon Giveaway!</h1>
        <p className="text-lg mb-4 text-gray-300">Don't miss your chance to grab an exciting discount! Click the button below and claim your special coupon.</p>
        {message && <p className="text-lg mb-3 text-blue-400 font-semibold animate-pulse">{message}</p>}
        {coupon && (
          <h2 className="text-xl font-semibold bg-blue-600 p-3 rounded-lg shadow-md inline-block text-yellow-300 border border-yellow-400">
            Your Coupon: <strong>{coupon}</strong>
          </h2>
        )}
        <button
          onClick={handleClaim}
          className="mt-6 px-6 py-3 bg-blue-600 hover:bg-blue-500 transition-all text-white font-bold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 transform hover:scale-105"
        >
           Claim Your Coupon Now!
        </button>
      </div>
      <Footer/>
    </div>
  );
}

export default App;

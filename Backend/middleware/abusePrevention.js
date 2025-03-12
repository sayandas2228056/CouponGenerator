const CLAIM_INTERVAL = 60 * 60 * 1000; // 1 hour
const ipClaims = {};

const claimCoupon = (req, res, next) => {
  const userIP = req.ip;
  const now = Date.now();

  if (ipClaims[userIP] && now - ipClaims[userIP] < CLAIM_INTERVAL) {
    return res.status(403).json({
      success: false,
      message: `You have already claimed a coupon. Try again in ${Math.ceil((CLAIM_INTERVAL - (now - ipClaims[userIP])) / 60000)} minutes.`,
    });
  }

  ipClaims[userIP] = now;
  next();
};

module.exports = { claimCoupon };

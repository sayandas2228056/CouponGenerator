require("dotenv").config();
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

const couponRoutes = require("./routes/couponRoutes");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cors());
app.use(cookieParser());
app.use(logger("dev"));

app.use("/api/coupons", couponRoutes); // Coupon API Routes

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

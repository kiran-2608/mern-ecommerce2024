import express from "express";

import { adminOnly } from "../middlewares/auth.js";
import { allCoupons, applyDiscount, createPaymentIntent, deleteCoupon, newCoupon } from "../controllers/payment.js";

const app = express.Router();

// route - /api/v1/payment/create
app.post("/create", createPaymentIntent);

// route - /api/v1/user/discount
app.get("/discount", applyDiscount);

// route - /api/v1/user/coupon/new
app.post("/coupon/new", adminOnly ,newCoupon);

// route - /api/v1/user/coupon/all
app.get("/coupon/all", adminOnly , allCoupons);

// route - /api/v1/user/coupon/id
app.delete("/coupon/:id", adminOnly , deleteCoupon);



export default app;

import express from "express";
import {authMiddleware} from "../middlewares/Auth.js";
import { listOrders, placeOrder, updateStatus, userOrders, verifyOrder } from "../controllers/orderController.js";
export const orderRouter =express.Router() ;

orderRouter.post("/place",authMiddleware ,placeOrder);
orderRouter.post("/verify" , verifyOrder);
orderRouter.post("/userOrder",authMiddleware,userOrders);
orderRouter.get('/list',listOrders );
orderRouter.post('/status' , updateStatus)

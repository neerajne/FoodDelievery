import express from "express" ;
import{addToCart , removeFromCart , getCart} from "../controllers/CartController.js" ;
export const cartRouter = express.Router();
import { authMiddleware } from "../middlewares/Auth.js";

cartRouter.post("/add" ,authMiddleware, addToCart);
cartRouter.post("/remove",authMiddleware,removeFromCart);
cartRouter.post("/get",authMiddleware,getCart);
import express from 'express';
import { createOrder, getOrders, updateOrder, getAllOrders } from '../controllers/orderController.js';

const orderRouter = express.Router();
orderRouter.post("/", createOrder)
orderRouter.get("/", getAllOrders);
orderRouter.put("/:orderId", updateOrder) 
router.get("/:page/:limit", getOrders);


export default orderRouter;
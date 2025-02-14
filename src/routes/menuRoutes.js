const express = require("express");
const router = express.Router();
const menuController = require("../controllers/menuController.js");
const orderListController = require("../controllers/orderListController.js");

router.get("/menu", menuController.getMenu);
router.get("/order", orderListController.getAllOrders);
router.post("/order", orderListController.addOrder);
router.delete("/order:id", orderListController.deleteOrder);
router.get("/order/:id", orderListController.getOrderById);

module.exports = router;
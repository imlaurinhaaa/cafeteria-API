const OrderList = require("../models/OrderList.js");
const Order = require("../models/Order.js");

const listing = new OrderList();

listing.addOrder(new Order("Ediana", "Salgado", "Pão de Queijo", 5.00, "pendente"));
listing.addOrder(new Order("Paulo", "Salgado", "Hamburgão", 8.00, "pendente"));

const router = {
    addOrder: (req, res) => {
        try {
            const { client, type, foodDescription, price, status } = req.body;
            if (!client || !type || !foodDescription || !price || !status) {
                throw new Error("Missing parameters");
            }
            const order = new Order(client, type, foodDescription, price, status);
            listing.addOrder(order);
            res.status(200).json({ message: "Order added successfully" });
        } catch (error) {
            res.status(400).json({ message: "Error to add Order" });
        }
    },

    getAllOrders: (req, res) => {
        try {
            const orders = listing.getAllOrders();
            res.status(200).json(orders);
        } catch (error) {
            res.status(404).json({ message: "Order List not Found" });
        }
    },

    getOrderById: (req, res) => {
        try {
            const { id } = req.params;
            const order = listing.getOrderById(id);
            res.status(200).json(order);
        } catch (error) {
            res.status(404).json({ message: "Order not Found" });
        }
    },

    deleteOrder: (req, res) => {
        try {
            const { id } = req.params;
            listing.deleteOrder(id);
            res.status(200).json({ message: "Order deleted successfully" });
        } catch (error) {
            res.status(404).json({ message: "Order not Found" });
        }
    }
}

module.exports = router;
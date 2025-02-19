const OrderList = require("../models/OrderList.js");
const Order = require("../models/Order.js");

const listing = new OrderList();

listing.addOrder(new Order("Ediana", "Salgado", "Pão de Queijo", 5.00, "pendente"));
listing.addOrder(new Order("Paulo", "Salgado", "Hamburgão", 8.00, "em preparo"));

const router = {
    addOrder: (req, res) => {
        try {
            const { client, type, foodDescription, price, status } = req.body;
            if (!client || !type || !foodDescription || !price || !status) {
                res.status(400).json({ message: "Missing parameters" });
            }
            if (status !== "pendente" && status !== "em preparo" && status !== "pronto") {
                res.status(400).json({ message: "Invalid status" });
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
            const id = req.params.id;
            const order = listing.getOrderById(id);
            if (order) {
                res.status(200).json({ client: order.client, status: order.status });
            } else {
                res.status(404).json({ message: "Order not Found" });
            }
        } catch (error) {
            res.status(404).json({ message: "Order not Found" });
        }
    },

    deleteOrder: (req, res) => {
        try {
            const id = req.params.id;
            const order = listing.getOrderById(id);
            if (order.status === "pendente") {
                listing.deleteOrder(id);
                res.status(200).json({ message: "Pedido cancelado" });
            } else {
                res.status(400).json({ message: "Não é possível cancelar um pedido que não está pendente" });
            }
        } catch (error) {
            res.status(404).json({ message: "Infelizmente o pedido não pode ser cancelado" });
        }
    }
}

module.exports = router;
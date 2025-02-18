const OrderList = require("../models/OrderList.js");
const Order = require("../models/Order.js");
const menuController = require("../controllers/MenuController.js");

const listing = new OrderList();

listing.addOrder(new Order("Ediana", "Salgado", "Pão de Queijo", 5.00, "pendente"));
listing.addOrder(new Order("Paulo", "Salgado", "Hamburgão", 8.00, "em preparo"));

const router = {
    addOrder: (req, res) => {
        try {
            const { client, type, foodDescription, price, status } = req.body;
            if (!client || !type || !foodDescription || !price || !status) {
                res.status(400).json({ message: "Por favor preencher todos os requisitos!" });
            }
            if (status !== "pendente" && status !== "em preparo" && status !== "pronto") {
                res.status(400).json({ message: "Status inválido, por favor tente: pendente, em preparo ou pronto" });
            }
            if (typeof price !== "number") {
                res.status(400).json({ message: "Preço precisa ser um número" });
            }
            const order = new Order(client, type, foodDescription, price, status);
            listing.addOrder(order);
            res.status(200).json({ message: "Pedidio finalizado!", order });
        } catch (error) {
            res.status(400).json({ message: "Error to add Order" });
        }
    },

    getAllOrders: (req, res) => {
        try {
            const orders = listing.getAllOrders();
            res.status(200).json(orders);
        } catch (error) {
            res.status(404).json({ message: "Não foi possível visualizar os pedidos" });
        }
    },

    getOrderById: (req, res) => {
        try {
            const id = req.params.id;
            const order = listing.getOrderById(id);
            if (order) {
                res.status(200).json({ client: order.client, status: order.status });
            } else {
                res.status(404).json({ message: "Confira o andamento de seu pedido" });
            }
        } catch (error) {
            res.status(404).json({ message: "Pedido não encontrado" });
        }
    },

    deleteOrder: (req, res) => {
        try {
            const order = req.params.id;
            listing.deleteOrder(order);
            if (order.status == "pendente") {
                listing.deleteOrder(order);
                res.status(200).json({ message: "Pedido cancelado" });
            }
        } catch (error) {
            res.status(404).json({ message: "Infelizmente o pedido não pode ser cancelado" });
        }
    }
}

module.exports = router;
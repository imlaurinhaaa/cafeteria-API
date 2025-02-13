const Menu = require("../models/Menu");
const Item = require("../models/Item");

const list = new Menu();

list.addItem(new Item("Salgado", "Pão de Queijo", 5.00));
list.addItem(new Item("Salgado", "Hamburgão", 8.00));
list.addItem(new Item("Salgado", "Sanduíche Natural", 12.00));
list.addItem(new Item("Doce", "Brownie", 3.50));
list.addItem(new Item("Doce", "Bolo de Pote", 10.00));
list.addItem(new Item("Doce", "Kitkat", 5.50));
list.addItem(new Item("Bebida", "Suco de Uva", 7.50));
list.addItem(new Item("Bebida", "Coca-Cola", 6.50));
list.addItem(new Item("Bebida", "Água", 5.00));

const router = {
    addItem: (req, res) => {
        try {
            const { type, foodDescription, price } = req.body;
            if (!type || !foodDescription || !price) {
                throw new Error("Missing parameters");
            }
            const item = new Item(type, foodDescription, price);
            list.addItem(item);
            res.status(200).json({ message: "Item added successfully" });
        } catch (error) {
            res.status(400).json({ message: "Error to add Item" });
        }
    },

    getMenu: (req, res) => {
        try {
            const items = list.getMenu();
            res.status(200).json(items);
        } catch (error) {
            res.status(404).json({ message: "Menu not Found" });
        }
    }
}

module.exports = router;
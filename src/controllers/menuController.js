
const Menu = require("../models/Item");


const list = new Menu();

list.addItem(new Menu("Salgado", "Pão de Queijo", 5.00));
list.addItem(new Menu("Salgado", "Hamburgão", 8.00));
list.addItem(new Menu("Salgado", "Sanduíche Natural", 12.00));
list.addItem(new Menu("Doce", "Brownie", 3.50));
list.addItem(new Menu("Doce", "Bolo de Pote", 10.00));
list.addItem(new Menu("Doce", "Kitkat", 5.50));
list.addItem(new Menu("Bebida", "Suco de Uva", 7.50));
list.addItem(new Menu("Bebida", "Coca-Cola", 6.50));
list.addItem(new Menu("Bebida", "Água", 5.00));

const router = {
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
const { v4: uuid4 } = require('uuid');

class Order {
    constructor(client, type, foodDescription, price, status) {
        this.id = uuid4();
        this.client = client;
        this.type = type;
        this.foodDescription = foodDescription;
        this.price = price;
        this.status = status;
    }
}

module.exports = Order;
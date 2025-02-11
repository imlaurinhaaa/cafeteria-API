class OrderList {
    constructor() {
        this.orders = [];
    }

    addOrder(order) {
        this.orders.push(order);
    }

    getAllOrders() {
        return this.orders;
    }

    getOrderById(id) {
        const order = this.orders.find((order) => order.id == id);
        if (!order) {
            throw new Error('Order not found');
        }
    }

    deleteOrder(id) {
        this.orders = this.orders.filter((order) => order.id != id);
    }
}

module.exports = OrderList;
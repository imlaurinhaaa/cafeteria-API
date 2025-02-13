class Menu {
    constructor() {
        this.items = [];
    }

    addItem(item) {
        this.items.push(item);
    }

    getMenu() {
        return this.items;
    }
}

module.exports = Menu;
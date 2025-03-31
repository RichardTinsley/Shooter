export class Menu {
    constructor() {
        this.menuItems = [];
    }
    draw(ctx) {
        this.menuItems.forEach((item) => {
            item.draw(ctx);
        });
    }
    update() {
        this.menuItems.forEach((item) => {
            item.update();
        });
    }
    getMenu() {
        return this.menuItems;
    }
}
//# sourceMappingURL=Menu.js.map
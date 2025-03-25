export class MenuBase {
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
}
//# sourceMappingURL=MenuBase.js.map
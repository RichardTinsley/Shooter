export class GUI {
    constructor() {
        this.menu = [];
    }
    draw(ctx) {
        this.menu.forEach((item) => {
            item.draw(ctx);
        });
    }
    update() {
        this.menu.forEach((item) => {
            item.update();
        });
    }
    getMenu() {
        return this.menu;
    }
}
//# sourceMappingURL=GUI.js.map
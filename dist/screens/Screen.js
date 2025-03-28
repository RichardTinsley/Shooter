export class Screen {
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
//# sourceMappingURL=Screen.js.map
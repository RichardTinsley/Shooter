export class GUI {
    constructor(state) {
        this.state = state;
        this.menu = [];
        this.initialiseMenu();
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
    initialiseMenu() {
        return;
    }
}
//# sourceMappingURL=GUI.js.map
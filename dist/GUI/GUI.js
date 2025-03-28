export class GUI {
    constructor(state) {
        this.state = state;
        this.menu = [];
        this.initialiseMenu(state);
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
    initialiseMenu(state) {
        return;
    }
}
//# sourceMappingURL=GUI.js.map
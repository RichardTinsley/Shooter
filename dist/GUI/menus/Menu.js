export var LABELS;
(function (LABELS) {
    LABELS["BEGIN"] = "Begin!";
    LABELS["NEWGAME"] = "New Game";
    LABELS["OPTIONS"] = "Options";
    LABELS["ABOUT"] = "About";
})(LABELS || (LABELS = {}));
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
    getMenuItemsArray() {
        return this.menuItems;
    }
}
//# sourceMappingURL=Menu.js.map
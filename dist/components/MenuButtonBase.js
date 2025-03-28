import { SIZES } from "../constants/game.js";
export class MenuButtonBase {
    constructor(text, x, y) {
        this.text = text;
        this.size = SIZES.TEXT_MENUITEM;
        this.width = this.text.length * (this.size / 1.75);
        this.position = { x: x, y: y };
        this.hitBox = {
            x: this.position.x - this.width / 2,
            y: this.position.y - this.size / 2,
            width: this.width,
            height: this.size,
        };
    }
    draw(ctx) {
        this.menuItem.draw(ctx);
    }
    update() {
        this.menuItem.update();
    }
}
//# sourceMappingURL=MenuButtonBase.js.map
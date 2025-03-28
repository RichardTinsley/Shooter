import { SIZES } from "../constants/game.js";
import { TextFactory } from "../texts/TextFactory.js";
export class MenuButtonText {
    constructor(text) {
        this.text = text;
        this.size = SIZES.TEXT_MENUITEM;
        this.width = this.text.length * (this.size / 1.75);
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
    setTextGlow() {
        this.menuItem = TextFactory.createMenuItemGlow();
        this.menuItem.setText(this.text);
        return this;
    }
    setTextPulsate() {
        this.menuItem = TextFactory.createMenuItemPulsate();
        this.menuItem.setText(this.text);
        return this;
    }
    setPosition(x, y) {
        if (x)
            this.position.x = x;
        if (y)
            this.position.y = y;
        return this;
    }
}
//# sourceMappingURL=MenuButton.js.map
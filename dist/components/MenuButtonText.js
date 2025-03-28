import { SIZES } from "../constants/game.js";
import { TextFactory } from "../texts/TextFactory.js";
export class MenuButtonText {
    constructor(text) {
        this.text = text;
        this.size = SIZES.TEXT_MENUITEM;
        this.width = this.text.length * (this.size / 1.75);
    }
    draw(ctx) {
        this.menuItem.draw(ctx);
    }
    update() {
        this.menuItem.update();
    }
    setTextGlow() {
        this.menuItem = TextFactory.createMenuItemGlow()
            .setText(this.text)
            .setPosition(this.position.x, this.position.y);
        return this;
    }
    setTextPulsate() {
        this.menuItem = TextFactory.createMenuItemPulsate()
            .setText(this.text)
            .setPosition(this.position.x, this.position.y);
        return this;
    }
    setPosition(x, y) {
        if (x)
            this.position.x = x;
        if (y)
            this.position.y = y;
        return this;
    }
    setHitBox() {
        this.hitBox = {
            x: this.position.x - this.width / 2,
            y: this.position.y - this.size / 2,
            width: this.width,
            height: this.size,
        };
        return this;
    }
}
//# sourceMappingURL=MenuButtonText.js.map
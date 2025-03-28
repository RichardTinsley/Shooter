import { TextFactory } from "../texts/TextFactory.js";
import { MenuButtonBase } from "./MenuButtonBase.js";
export class MenuButtonTextGlow extends MenuButtonBase {
    constructor(text, x, y) {
        super(text, x, y);
        this.text = text;
        this.menuItem = TextFactory.createMenuItemGlow()
            .setText(this.text)
            .setPosition(this.position.x, this.position.y);
    }
    draw(ctx) {
        this.menuItem.draw(ctx);
    }
    update() {
        this.menuItem.update();
    }
}
//# sourceMappingURL=MenuButtonTextGlow.js.map
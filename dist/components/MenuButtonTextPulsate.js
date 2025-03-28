import { TextFactory } from "../texts/TextFactory.js";
import { MenuButtonBase } from "./MenuButtonBase.js";
export class MenuButtonTextPulsate extends MenuButtonBase {
    constructor(text, x, y) {
        super(text, x, y);
        this.text = text;
        this.menuItem = TextFactory.createMenuItemPulsate()
            .setText(this.text)
            .setPosition(x, y);
    }
    draw(ctx) {
        this.menuItem.draw(ctx);
    }
    update() {
        this.menuItem.update();
    }
}
//# sourceMappingURL=MenuButtonTextPulsate.js.map
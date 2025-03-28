import { MenuButtonText } from "../components/MenuButtonText.js";
import { Menu } from "./Menu.js";
export class BeginMenu extends Menu {
    constructor() {
        super();
        this.menuItems = [];
        this.beginButton = new MenuButtonText("Begin!")
            .setPosition(100, 100)
            .setTextPulsate();
        this.menuItems.push(this.beginButton);
    }
    draw(ctx) {
        super.draw(ctx);
    }
    update() {
        super.update();
    }
}
//# sourceMappingURL=BeginMenu.js.map
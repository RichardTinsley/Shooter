import { MenuButtonTextPulsate } from "../components/MenuButtonTextPulsate.js";
import { Menu } from "./Menu.js";
export class LoadingCompleteMenu extends Menu {
    constructor() {
        super();
        this.beginButton = new MenuButtonTextPulsate("Begin!", 100, 100);
        this.menuItems.push(this.beginButton);
    }
    draw(ctx) {
        super.draw(ctx);
    }
    update() {
        super.update();
    }
}
//# sourceMappingURL=LoadingCompleteMenu.js.map
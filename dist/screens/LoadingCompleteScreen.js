import { LoadingCompleteMenu } from "../menus/LoadingCompleteMenu.js";
import { LoadingScreenBase } from "./LoadingScreenBase.js";
export class LoadingCompleteScreen extends LoadingScreenBase {
    constructor() {
        super();
        this.menu = new LoadingCompleteMenu();
    }
    draw(ctx) {
        super.draw(ctx);
        this.menu.draw(ctx);
    }
    update() {
        super.update();
        this.menu.update();
    }
}
//# sourceMappingURL=LoadingCompleteScreen.js.map
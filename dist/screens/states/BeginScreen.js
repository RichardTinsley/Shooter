import { GUIComponentFactory } from "../../factories/GUIComponentFactory.js";
import { TextFactory } from "../../factories/TextFactory.js";
export class BeginScreen {
    constructor(state) {
        this.state = state;
        this.DSLogo = GUIComponentFactory.DSLogo();
        this.DSTitle = TextFactory.DSTitle();
    }
    draw(ctx) {
        this.DSLogo.draw(ctx);
        this.DSTitle.draw(ctx);
    }
    update() { }
}
//# sourceMappingURL=BeginScreen.js.map
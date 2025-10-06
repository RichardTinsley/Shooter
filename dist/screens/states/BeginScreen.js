import { GUIComponentFactory } from "../../factories/GUIComponentFactory.js";
import { TextFactory } from "../../factories/TextFactory.js";
export class BeginScreen {
    constructor(state) {
        this.state = state;
        this.DSLogo = GUIComponentFactory.DSLogo();
        this.DSTitle = TextFactory.DSTitle();
        this.begin = TextFactory.Begin();
    }
    draw(ctx) {
        this.DSLogo.draw(ctx);
        this.DSTitle.draw(ctx);
        this.begin.draw(ctx);
    }
    update() {
        this.begin.update();
    }
}
//# sourceMappingURL=BeginScreen.js.map
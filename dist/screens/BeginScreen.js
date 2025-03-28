import { Screen } from "./Screen.js";
import { TextFactory } from "../texts/TextFactory.js";
import { drawIntroLogo } from "./LoadingScreen.js";
export class BeginScreen extends Screen {
    constructor() {
        super(...arguments);
        this.title = TextFactory.createTitleText();
        this.dslogo = document.getElementById("dslogo");
    }
    draw(ctx) {
        super.draw(ctx);
        drawIntroLogo(ctx, this.title, this.dslogo);
    }
    update() {
        super.update();
    }
}
//# sourceMappingURL=BeginScreen.js.map
import { Screen } from "./Screen.js";
import { TextFactory } from "../texts/TextFactory.js";
import { drawIntroLogo } from "./LoadingScreen.js";
import { BeginMenu } from "../GUI/BeginMenu.js";
export class BeginScreen extends Screen {
    constructor() {
        super();
        this.title = TextFactory.createTitleText();
        this.dslogo = document.getElementById("dslogo");
        this.menu = BeginMenu();
    }
    draw(ctx) {
        drawIntroLogo(ctx, this.title, this.dslogo);
        super.draw(ctx);
    }
    update() {
        super.update();
    }
}
//# sourceMappingURL=BeginScreen.js.map
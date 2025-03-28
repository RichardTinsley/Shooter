import { GUI as GUI } from "./GUI.js";
import { TextFactory } from "../texts/TextFactory.js";
import { drawIntroLogo } from "./LoadingGUI.js";
import { BeginMenu } from "../GUI/BeginMenu.js";
export class BeginGUI extends GUI {
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
//# sourceMappingURL=BeginGUI.js.map
import { GUI } from "./GUI.js";
import { TextFactory } from "../texts/TextFactory.js";
import { drawIntroLogo } from "./LoadingGUI.js";
import { MenuButton, LABELS } from "../components/MenuButton.js";
import { SIZES } from "../constants/game.js";
export class BeginGUI extends GUI {
    constructor(state) {
        super(state);
        this.state = state;
        this.title = TextFactory.createTitleText();
        this.dslogo = document.getElementById("dslogo");
    }
    draw(ctx) {
        drawIntroLogo(ctx, this.title, this.dslogo);
        super.draw(ctx);
    }
    update() {
        super.update();
    }
    initialiseMenu(state) {
        const beginButton = new MenuButton(TextFactory.createMenuItemPulsate(), state, LABELS.BEGIN).setPosition(SIZES.GAME_WIDTH_HALF, SIZES.GAME_HEIGHT - 120);
        this.menu.push(beginButton);
    }
}
//# sourceMappingURL=BeginGUI.js.map
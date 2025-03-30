import { GUI } from "./GUI.js";
import { TextFactory } from "../entities/texts/TextFactory.js";
import { drawIntroLogo } from "./LoadingGUI.js";
import { MenuButton, LABELS } from "./components/MenuButton.js";
import { SIZES } from "../constants/game.js";
export class BeginGUI extends GUI {
    constructor(state) {
        super(state);
        this.state = state;
        this.title = TextFactory.createTitleText();
        this.dslogo = document.getElementById("dslogo");
        this.initialiseMenu();
    }
    draw(ctx) {
        super.draw(ctx);
        drawIntroLogo(ctx, this.title, this.dslogo);
    }
    update() {
        super.update();
    }
    initialiseMenu() {
        const beginButton = new MenuButton(TextFactory.createMenuItemPulsate(), this.state, this.state.setMainMenuState, LABELS.BEGIN).setPosition({ x: SIZES.GAME_WIDTH_HALF, y: SIZES.GAME_HEIGHT - 120 });
        this.menu.push(beginButton);
    }
}
//# sourceMappingURL=BeginGUI.js.map
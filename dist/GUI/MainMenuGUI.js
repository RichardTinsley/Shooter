import { GUI } from "./GUI.js";
import { MenuButton, LABELS } from "./components/MenuButton.js";
import { TextFactory } from "../texts/TextFactory.js";
import { menuVertical } from "../utilities/menuUtil.js";
export class MainMenuGUI extends GUI {
    constructor(state) {
        super(state);
        this.state = state;
    }
    draw(ctx) {
        super.draw(ctx);
    }
    update() {
        super.update();
    }
    initialiseMenu() {
        const newGame = new MenuButton(TextFactory.createMenuItemGlow(), this.state, this.state.setNewGameState, LABELS.NEWGAME);
        const options = new MenuButton(TextFactory.createMenuItemGlow(), this.state, this.state.setOptionsState, LABELS.OPTIONS);
        const about = new MenuButton(TextFactory.createMenuItemGlow(), this.state, this.state.setAboutState, LABELS.ABOUT);
        this.menu.push(newGame, options, about);
        menuVertical(this.menu, 400);
    }
}
//# sourceMappingURL=MainMenuGUI.js.map
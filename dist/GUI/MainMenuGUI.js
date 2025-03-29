import { GUI } from "./GUI.js";
import { LABELS } from "./components/MenuButton.js";
export class MainMenuGUI extends GUI {
    constructor(state) {
        super(state);
        this.state = state;
        this.menuTemplate = [
            { state: this.state.setNewGameState, label: LABELS.NEWGAME },
            { state: this.state.setOptionsState, label: LABELS.OPTIONS },
            { state: this.state.setAboutState, label: LABELS.ABOUT },
        ];
        this.menu = this.initialiseVerticalMenu(this.menuTemplate, 400);
    }
    draw(ctx) {
        super.draw(ctx);
    }
    update() {
        super.update();
    }
}
//# sourceMappingURL=MainMenuGUI.js.map
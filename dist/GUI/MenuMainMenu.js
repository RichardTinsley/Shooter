import { LABELS } from "./MenuLabelBuilder.js";
import { MenuVertical } from "./MenuVertical.js";
export class MainMenu extends MenuVertical {
    constructor(state, position) {
        super(state, position);
        const menuTemplate = [
            { state: state.setNewGameState, label: LABELS.NEWGAME },
            { state: state.setOptionsState, label: LABELS.OPTIONS },
            { state: state.setAboutState, label: LABELS.ABOUT },
        ];
        this.menuItems = this.initialiseVerticalMenu(state, menuTemplate, position);
    }
}
//# sourceMappingURL=MenuMainMenu.js.map
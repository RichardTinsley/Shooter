import { LABELS } from "./MenuLabelBuilder.js";
import { VerticalMenu } from "./VerticalMenu.js";
export class MainMenu extends VerticalMenu {
    constructor(state, position) {
        super();
        const menuTemplate = [
            { state: state.setNewGameScreen, label: LABELS.NEWGAME },
            { state: state.setOptionsScreen, label: LABELS.OPTIONS },
            { state: state.setAboutScreen, label: LABELS.ABOUT },
        ];
        this.menuItems = this.initialiseVerticalMenu(state, menuTemplate, position);
    }
}
//# sourceMappingURL=MainMenu.js.map
import { LABELS } from "./MenuLabelBuilder.js";
import { VerticalMenu } from "./VerticalMenu.js";
export class MainMenu extends VerticalMenu {
    constructor(screen, position) {
        super();
        const menuTemplate = [
            { screen: screen.setPlayScreen, label: LABELS.NEWGAME },
            { screen: screen.setOptionsScreen, label: LABELS.OPTIONS },
            { screen: screen.setAboutScreen, label: LABELS.ABOUT },
        ];
        this.menuItems = this.initialiseVerticalMenu(screen, menuTemplate, position);
    }
}
//# sourceMappingURL=MainMenu.js.map
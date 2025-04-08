import { LABELS } from "./MenuLabelBuilder.js";
import { VerticalMenu } from "./VerticalMenu.js";
export class BeginMenu extends VerticalMenu {
    constructor(screen, position) {
        super();
        const menuTemplate = [
            { screen: screen.setMainMenuScreen, label: LABELS.BEGIN },
        ];
        this.menuItems = this.initialiseVerticalMenu(screen, menuTemplate, position);
    }
}
//# sourceMappingURL=BeginMenu.js.map
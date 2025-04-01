import { LABELS } from "./MenuLabelBuilder.js";
import { VerticalMenu } from "./VerticalMenu.js";
export class BeginMenu extends VerticalMenu {
    constructor(state, position) {
        super();
        const menuTemplate = [
            { state: state.setMainMenuScreen, label: LABELS.BEGIN },
        ];
        this.menuItems = this.initialiseVerticalMenu(state, menuTemplate, position);
    }
}
//# sourceMappingURL=BeginMenu.js.map
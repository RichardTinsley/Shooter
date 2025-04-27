import { STATE } from "../../../constants/states.js";
export class MouseOver {
    constructor(menuButton) {
        this.menuButton = menuButton;
        this.menuButton.label.setState(STATE.MOUSEOVER);
    }
}
//# sourceMappingURL=MouseOver.js.map
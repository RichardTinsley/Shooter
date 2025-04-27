import { STATE } from "../../../constants/states.js";
export class MouseOff {
    constructor(menuButton) {
        this.menuButton = menuButton;
        this.menuButton.label.setState(STATE.MOUSEOFF);
    }
}
//# sourceMappingURL=MouseOff.js.map
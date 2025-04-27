import { STATE } from "../../../constants/states.js";
export class Normal {
    constructor(menuButton) {
        this.menuButton = menuButton;
        this.menuButton.label.setState(STATE.NORMAL);
    }
}
//# sourceMappingURL=Normal.js.map
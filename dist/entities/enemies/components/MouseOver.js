import { STATE } from "../../../constants/states";
export class MouseOverEnemy {
    constructor() {
        this.state = STATE.MOUSEOFF;
    }
    setWidth(width) {
        this.width = width;
        return this;
    }
    setState(state) {
        this.state = state;
        return this;
    }
    getState() {
        return this.state;
    }
}
//# sourceMappingURL=MouseOver.js.map
import { STATE } from "../../../constants/states.js";
import { drawMouseOverEnemy } from "../../../utilities/drawShapes.js";
export class MouseOverEnemy {
    constructor() {
        this.state = STATE.MOUSEOFF;
    }
    draw(ctx) {
        switch (this.state) {
            case STATE.MOUSEOVER:
                drawMouseOverEnemy(ctx, this.position, this.width);
                break;
            case STATE.MOUSEOFF:
                break;
        }
    }
    setPosition(position) {
        this.position = position;
        return this;
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
//# sourceMappingURL=MouseOverEnemy.js.map
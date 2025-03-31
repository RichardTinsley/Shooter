import { GUIFactory } from "../GUI/GUIFactory.js";
export class BeginState {
    constructor(state) {
        this.state = state;
        this.gui = GUIFactory.createBeginGUI(this.state);
    }
    draw(ctx) {
        this.gui.draw(ctx);
    }
    update(event) {
        this.gui.update(event);
    }
}
//# sourceMappingURL=BeginState.js.map
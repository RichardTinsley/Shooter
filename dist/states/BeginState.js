import { GUIFactory } from "../GUI/GUIFactory.js";
export class BeginState {
    constructor(state) {
        this.state = state;
        this.gui = GUIFactory.createBeginGUI(this.state);
    }
    draw(ctx) {
        this.gui.draw(ctx);
    }
    update() {
        this.gui.update();
    }
}
//# sourceMappingURL=BeginState.js.map
import { GUIFactory } from "../GUI/GUIFactory.js";
export class MainMenuState {
    constructor(state) {
        this.state = state;
        this.gui = GUIFactory.createMainMenuGUI(this.state);
    }
    draw(ctx) {
        this.gui.draw(ctx);
    }
    update(event) {
        this.gui.update(event);
    }
}
//# sourceMappingURL=MainMenuState.js.map
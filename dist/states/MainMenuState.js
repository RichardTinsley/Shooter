import { GUIFactory } from "../GUI/GUIFactory.js";
export class MainMenuState {
    constructor(state) {
        this.state = state;
        this.gui = GUIFactory.createMainMenuGUI(this.state);
    }
    draw(ctx) {
        this.gui.draw(ctx);
    }
    update() {
        this.gui.update();
    }
}
//# sourceMappingURL=MainMenuState.js.map
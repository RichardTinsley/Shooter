import { MainMenuGUI } from "../GUI/MainMenuGUI.js";
export class MainMenuState {
    constructor(state) {
        this.state = state;
        this.gui = new MainMenuGUI(this.state);
    }
    draw(ctx) {
        console.log("MAINMENUSTATE");
    }
    update() {
    }
}
//# sourceMappingURL=MainMenuState.js.map
import { GUI } from "./GUI.js";
export class MainMenuGUI extends GUI {
    constructor(state) {
        super(state);
        this.state = state;
    }
    draw(ctx) {
        super.draw(ctx);
        console.log("MENUGUI!!!");
    }
    update() {
        super.update();
    }
    initialiseMenu() { }
}
//# sourceMappingURL=MainMenuGUI.js.map
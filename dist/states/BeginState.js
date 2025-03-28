import { ScreenFactory } from "../screens/ScreenFactory.js";
export class BeginState {
    constructor(state) {
        this.state = state;
        this.screen = ScreenFactory.createBeginScreen();
    }
    draw(ctx) {
        this.screen.draw(ctx);
    }
    update() {
        this.screen.update();
    }
    mouseOver() {
        throw new Error("Method not implemented.");
    }
}
//# sourceMappingURL=BeginState.js.map
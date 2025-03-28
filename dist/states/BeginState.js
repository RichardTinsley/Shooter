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
}
//# sourceMappingURL=BeginState.js.map
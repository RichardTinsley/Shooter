import { ScreenFactory } from "../screens/ScreenFactory.js";
export class LoadingComplete {
    constructor(state) {
        this.state = state;
        this.screen = ScreenFactory.createLoadingCompleteScene();
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
//# sourceMappingURL=LoadingComplete.js.map
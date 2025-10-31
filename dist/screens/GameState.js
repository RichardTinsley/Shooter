import { LoadingScreen } from "./LoadingScreen.js";
export class GameState {
    constructor() {
        this.state = new LoadingScreen(this);
        this.setBeginScreen = () => console.log("OMG22222222");
    }
    draw(ctx) {
        this.state.draw(ctx);
    }
    update() {
        this.state.update();
    }
}
//# sourceMappingURL=GameState.js.map
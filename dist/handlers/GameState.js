import { BeginScreen } from "../screens/BeginScreen.js";
import { LoadingScreen } from "../screens/LoadingScreen.js";
export class GameState {
    constructor() {
        this.state = new LoadingScreen(this);
        this.setBeginScreen = () => (this.state = new BeginScreen(this));
    }
    draw(ctx) {
        this.state.draw(ctx);
    }
    update() {
        this.state.update();
    }
}
//# sourceMappingURL=GameState.js.map
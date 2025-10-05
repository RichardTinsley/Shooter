import { BeginScreen } from "./states/BeginScreen.js";
import { LoadingScreen } from "./states/LoadingScreen.js";
export class Screen {
    constructor() {
        this.setBeginScreen = () => (this.state = new BeginScreen(this));
        this.state = new LoadingScreen(this);
    }
    draw(ctx) {
        this.state.draw(ctx);
    }
    update() {
        this.state.update();
    }
}
//# sourceMappingURL=Screen.js.map
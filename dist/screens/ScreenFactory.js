import { BeginScreen } from "./BeginScreen.js";
import { LoadingScreen } from "./LoadingScreen.js";
export class ScreenFactory {
    static createLoadingScreen() {
        return new LoadingScreen();
    }
    static createBeginScreen() {
        return new BeginScreen();
    }
}
//# sourceMappingURL=ScreenFactory.js.map
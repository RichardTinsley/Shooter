import { BeginGUI } from "./BeginScreen.js";
import { LoadingScreen } from "./LoadingScreen.js";
export class ScreenFactory {
    static createLoadingScreen() {
        return new LoadingScreen();
    }
    static createBeginScreen() {
        return new BeginGUI();
    }
}
//# sourceMappingURL=ScreenFactory.js.map
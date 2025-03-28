import { LoadingCompleteScreen } from "./LoadingCompleteScreen.js";
import { LoadingScreen } from "./LoadingScreen.js";
export class ScreenFactory {
    static createLoadingScene() {
        return new LoadingScreen();
    }
    static createLoadingCompleteScene() {
        return new LoadingCompleteScreen();
    }
}
//# sourceMappingURL=ScreenFactory.js.map
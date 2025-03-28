import { LoadingCompleteScreen } from "./LoadingCompleteScreen.js";
import { LoadingScreen } from "./LoadingScreen.js";
export class ScreenFactory {
    static createLoadingScreen() {
        return new LoadingScreen();
    }
    static createLoadingCompleteScreen() {
        return new LoadingCompleteScreen();
    }
}
//# sourceMappingURL=ScreenFactory.js.map
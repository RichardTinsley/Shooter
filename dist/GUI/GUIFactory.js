import { BeginGUI } from "./BeginGUI.js";
import { LoadingGUI } from "./LoadingGUI.js";
import { MainMenuGUI } from "./MainMenuGUI.js";
export class GUIFactory {
    static createLoadingGUI(state) {
        return new LoadingGUI(state);
    }
    static createBeginGUI(state) {
        return new BeginGUI(state);
    }
    static createMainMenuGUI(state) {
        return new MainMenuGUI(state);
    }
}
//# sourceMappingURL=GUIFactory.js.map
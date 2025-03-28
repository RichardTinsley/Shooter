import { BeginGUI } from "./BeginGUI.js";
import { LoadingGUI } from "./LoadingGUI.js";
export class GUIFactory {
    static createLoadingGUI(state) {
        return new LoadingGUI(state);
    }
    static createBeginGUI(state) {
        return new BeginGUI(state);
    }
}
//# sourceMappingURL=GUIFactory.js.map
import { BeginGUI } from "../GUI/BeginGUI.js";
import { LoadingGUI } from "./LoadingGUI.js";
export class GUIFactory {
    static createLoadingScreen() {
        return new LoadingGUI();
    }
    static createBeginScreen() {
        return new BeginGUI();
    }
}
//# sourceMappingURL=GUIFactory.js.map
import { GUIComponentFactory } from "../factories/GUIComponentFactory.js";
import { LoadingScreen } from "./LoadingScreen.js";
export class Screen {
    constructor() {
        this.state = new LoadingScreen(this).addComponent(GUIComponentFactory.DSLogo());
        this.setBeginScreen = () => console.log("OMG22222222");
    }
}
//# sourceMappingURL=Screen.js.map
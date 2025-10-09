import { GUIComponentFactory } from "../factories/GUIComponentFactory.js";
import { LoadingScreen } from "./LoadingScreen.js";
export class Screen {
    constructor() {
        this.setBeginScreen = () => console.log("OMG22222222");
        this.state = new LoadingScreen(this).addComponent(GUIComponentFactory.DSLogo());
    }
}
//# sourceMappingURL=Screen.js.map
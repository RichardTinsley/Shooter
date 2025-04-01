import { BeginningScreen } from "./BeginState.js";
import { LoadingScreen } from "./LoadingState.js";
import { MainMenuScreen } from "./MainMenuState.js";
export class Screen {
    constructor() {
        this.currentState = new LoadingScreen(this);
        this.setBeginningScreen = () => (this.currentState = new BeginningScreen(this));
        this.setMainMenuScreen = () => (this.currentState = new MainMenuScreen(this));
        this.setNewGameScreen = () => (this.currentState = new BeginningScreen(this));
        this.setOptionsScreen = () => (this.currentState = new BeginningScreen(this));
        this.setAboutScreen = () => (this.currentState = new BeginningScreen(this));
    }
    getCurrentState() {
        return this.currentState;
    }
}
//# sourceMappingURL=State.js.map
import { BeginningScreen } from "./BeginScreen.js";
import { LoadingScreen } from "./LoadingScreen.js";
import { MainMenuScreen } from "./MainMenuScreen.js";
import { PlayScreen } from "./PlayScreen.js";
export class Screen {
    constructor() {
        this.currentScreen = new LoadingScreen(this);
        this.setBeginningScreen = () => (this.currentScreen = new BeginningScreen(this));
        this.setMainMenuScreen = () => (this.currentScreen = new MainMenuScreen(this));
        this.setPlayScreen = () => (this.currentScreen = new PlayScreen(this));
        this.setOptionsScreen = () => (this.currentScreen = new BeginningScreen(this));
        this.setAboutScreen = () => (this.currentScreen = new BeginningScreen(this));
    }
    getCurrentState() {
        return this.currentScreen;
    }
}
//# sourceMappingURL=Screen.js.map
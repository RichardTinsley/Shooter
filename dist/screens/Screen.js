import { BeginningScreen } from "./BeginScreen.js";
import { LoadingScreen } from "./LoadingScreen.js";
import { MainMenuScreen } from "./MainMenuScreen.js";
import { BattleScreen } from "./BattleScreen.js";
export class Screen {
    constructor() {
        this.switchToBeginningScreen = () => (this.currentScreen = new BeginningScreen(this));
        this.switchToMainMenuScreen = () => (this.currentScreen = new MainMenuScreen(this));
        this.switchToBattleScreen = () => (this.currentScreen = new BattleScreen(this));
        this.switchToOptionsScreen = () => (this.currentScreen = new BeginningScreen(this));
        this.switchToAboutScreen = () => (this.currentScreen = new BeginningScreen(this));
        this.currentScreen = new LoadingScreen(this.switchToBeginningScreen);
    }
    draw(ctx) {
        this.currentScreen.draw(ctx);
    }
    update() {
        this.currentScreen.update();
    }
}
//# sourceMappingURL=Screen.js.map
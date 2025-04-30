import { BeginScreen } from "./BeginScreen.js";
import { LoadingScreen } from "./LoadingScreen.js";
import { MainMenuScreen } from "./MainMenuScreen.js";
import { BattleScreen } from "./BattleScreen.js";
export class Screen {
    constructor() {
        this.beginScreen = () => (this.screen = new BeginScreen(this.buttons));
        this.mainMenuScreen = () => (this.screen = new MainMenuScreen(this.buttons));
        this.battleScreen = () => (this.screen = new BattleScreen(this.buttons));
        this.optionsScreen = () => (this.screen = new BeginScreen(this.buttons));
        this.aboutScreen = () => (this.screen = new BeginScreen(this.buttons));
        this.buttons = {
            begin: this.beginScreen,
            mainMenu: this.mainMenuScreen,
            battle: this.battleScreen,
            option: this.optionsScreen,
            about: this.aboutScreen,
        };
        this.screen = new LoadingScreen(this.buttons);
    }
    draw(ctx) {
        this.screen.draw(ctx);
    }
    update() {
        this.screen.update();
    }
}
//# sourceMappingURL=Screen.js.map
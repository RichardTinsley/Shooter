import { BeginScreen } from "./BeginScreen.js";
import { LoadingScreen } from "./LoadingScreen.js";
import { MainMenuScreen } from "./MainMenuScreen.js";
import { BattleScreen } from "./BattleScreen.js";
export class Screen {
    constructor() {
        this.beginScreen = () => (this.screen = new BeginScreen(this));
        this.mainMenuScreen = () => (this.screen = new MainMenuScreen(this));
        this.battleScreen = () => (this.screen = new BattleScreen(this));
        this.optionsScreen = () => (this.screen = new BeginScreen(this));
        this.aboutScreen = () => (this.screen = new BeginScreen(this));
        this.screen = new LoadingScreen(this);
    }
    draw(ctx) {
        this.screen.draw(ctx);
    }
    update() {
        this.screen.update();
    }
}
//# sourceMappingURL=Screen.js.map
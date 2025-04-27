import { Debug } from "./handlers/Debug.js";
import { Keyboard } from "./handlers/Keyboard.js";
import { Mouse } from "./handlers/Mouse.js";
import { Time } from "./handlers/Time.js";
import { Screen } from "./screens/Screen.js";
export class Game {
    constructor() {
        this.time = new Time();
        this.screen = new Screen();
        this.mouse = new Mouse();
        this.debug = new Debug(this.screen, this.mouse);
        this.keyboard = new Keyboard(this.screen, this.debug);
    }
    draw(ctx) {
        this.screen.getCurrentState().draw(ctx);
        this.debug.draw(ctx);
    }
    update() {
        this.time.update();
        this.mouse.resetCursor();
        this.screen.getCurrentState().update();
        this.mouse.setCursor();
        this.debug.update();
    }
}
//# sourceMappingURL=Game.js.map
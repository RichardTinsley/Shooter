import { Debug } from "./handlers/Debug.js";
import { Keyboard } from "./handlers/Keyboard.js";
import { Mouse } from "./handlers/Mouse.js";
import { Time } from "./handlers/Time.js";
import { Screen } from "./screens/Screen.js";
export class Game {
    constructor() {
        this.time = new Time();
        this.screen = new Screen();
        this.debug = new Debug(this.screen);
        this.mouse = new Mouse();
        this.keyboard = new Keyboard(this.screen, this.debug);
    }
    draw(ctx) {
        this.screen.getCurrentState().draw(ctx);
        this.debug.draw(ctx);
    }
    update() {
        this.time.update();
        this.screen.getCurrentState().update();
        this.debug.update();
    }
}
//# sourceMappingURL=Game.js.map
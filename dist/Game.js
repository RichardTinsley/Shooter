import { Debug } from "./handlers/Debug.js";
import { Keyboard } from "./handlers/Keyboard.js";
import { Mouse } from "./handlers/Mouse.js";
import { Time } from "./handlers/Time.js";
import { State } from "./states/State.js";
export class Game {
    constructor() {
        this.time = Time.create();
        this.state = new State();
        this.mouse = new Mouse(this.state);
        this.debug = new Debug(this.state, this.mouse);
        this.keyboard = new Keyboard(this.state, this.debug);
    }
    draw(ctx) {
        this.state.getCurrentState().draw(ctx);
        this.debug.draw(ctx);
    }
    update() {
        this.time.update();
        this.state.getCurrentState().update();
        this.debug.update();
        this.mouse.update(this.state);
    }
}
//# sourceMappingURL=Game.js.map
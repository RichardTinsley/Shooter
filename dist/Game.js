import { Debug } from "./handlers/Debug.js";
import { Keyboard } from "./handlers/Keyboard.js";
import { Mouse } from "./handlers/Mouse.js";
import { State } from "./states/State.js";
export class Game {
    constructor() {
        this.state = new State();
        this.mouse = new Mouse(this.state);
        this.debug = new Debug(this.state, this.mouse);
        this.keyboard = new Keyboard(this.state, this.debug);
    }
    draw(ctx) {
        this.state.getCurrentState().draw(ctx);
        this.debug.draw(ctx);
    }
    update(event) {
        this.state.getCurrentState().update(event);
        this.debug.update();
    }
}
//# sourceMappingURL=Game.js.map
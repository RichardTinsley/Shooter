import { Debug } from "./handlers/Debug.js";
import { Keyboard } from "./handlers/Keyboard.js";
import { Mouse } from "./handlers/Mouse.js";
import { State } from "./states/State.js";
export class Game {
    constructor() {
        this.state = new State();
        this.keyboard = new Keyboard(this.state);
        this.mouse = new Mouse(this.state);
        this.debug = new Debug(this.state, this.mouse);
    }
    draw(ctx) {
        this.state.getState().draw(ctx);
        this.debug.draw(ctx);
    }
    update() {
        this.state.getState().update();
        this.debug.update();
    }
}
//# sourceMappingURL=Game.js.map
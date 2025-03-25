import { StateLoading } from "./states/StateLoading.js";
import { Debug } from "./handlers/Debug.js";
export class Game {
    constructor() {
        this.state = new StateLoading();
        this.debug = new Debug();
    }
    draw(ctx) {
        this.state.draw(ctx);
        this.debug.draw(ctx);
    }
    update() {
        this.state.update();
        this.debug.update();
    }
}
//# sourceMappingURL=Game.js.map
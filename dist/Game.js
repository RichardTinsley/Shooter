import { Debug } from "./handlers/Debug.js";
import { Scene } from "./scenes/Scene.js";
export class Game {
    constructor() {
        this.scene = new Scene();
        this.debug = new Debug();
    }
    draw(ctx) {
        this.scene.getCurrentState().draw(ctx);
        this.debug.draw(ctx);
    }
    update() {
        this.scene.getCurrentState().update();
        this.debug.update();
    }
}
//# sourceMappingURL=Game.js.map
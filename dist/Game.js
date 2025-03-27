import { Debug } from "./handlers/Debug.js";
import { Keyboard } from "./handlers/Keyboard.js";
import { Scene } from "./scenes/Scene.js";
export class Game {
    constructor() {
        this.scene = new Scene();
        this.debug = new Debug();
        this.keyboard = new Keyboard(this.scene);
    }
    draw(ctx) {
        this.scene.getState().draw(ctx);
        this.debug.draw(ctx);
    }
    update() {
        this.scene.getState().update();
        this.debug.update();
    }
}
//# sourceMappingURL=Game.js.map
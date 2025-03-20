import { context } from "./utilities/context.js";
import { Game } from "./Game.js";
const ctx = context();
class Main {
    constructor() {
        this.Game = new Game();
        this.frame = (time) => {
            this.Game.draw(ctx);
            this.Game.update();
            requestAnimationFrame(this.frame);
        };
        requestAnimationFrame(this.frame);
    }
}
new Main();
//# sourceMappingURL=index.js.map
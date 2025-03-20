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
window.addEventListener("load", () => {
    new Main();
});
//# sourceMappingURL=index.js.map
import { context } from "./utilities/context.js";
import { Game } from "./Game.js";
const ctx = context();
class Main {
    constructor() {
        this.frame = (time) => {
            this.Game.draw();
            this.Game.update();
            requestAnimationFrame(this.frame);
        };
        this.Game = new Game();
        requestAnimationFrame(this.frame);
    }
}
window.addEventListener("load", () => {
    new Main();
});
//# sourceMappingURL=index.js.map
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
    var _a;
    new Main();
    (_a = document.getElementById("positioning")) === null || _a === void 0 ? void 0 : _a.remove();
});
//# sourceMappingURL=index.js.map
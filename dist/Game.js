import { Screen } from "./screens/Screen.js";
export class Game {
    constructor() {
        this.screen = new Screen();
    }
    draw(ctx) {
        this.screen.draw(ctx);
    }
    update() {
        this.screen.update();
    }
}
//# sourceMappingURL=Game.js.map
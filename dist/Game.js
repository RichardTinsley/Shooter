import { Screen } from "./screens/Screen.js";
export class Game {
    constructor() {
        this.screen = new Screen();
    }
    draw(ctx) {
        this.screen.state.draw(ctx);
    }
    update() {
        this.screen.state.update();
    }
}
//# sourceMappingURL=Game.js.map
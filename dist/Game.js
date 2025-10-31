import { GameState } from "./screens/GameState.js";
export class Game {
    constructor() {
        this.screen = new GameState();
    }
    draw(ctx) {
        this.screen.draw(ctx);
    }
    update() {
        this.screen.update();
    }
}
//# sourceMappingURL=Game.js.map
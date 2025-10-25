import { createGameFSM } from "./FSM/GameStates.js";
import { Screen } from "./screens/Screen.js";
export class Game {
    constructor() {
        this.screen = new Screen();
        this.gameFSM = createGameFSM();
    }
    draw(ctx) {
        this.gameFSM.draw(ctx);
    }
    update() {
    }
}
//# sourceMappingURL=Game.js.map
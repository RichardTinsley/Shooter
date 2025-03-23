import { LoadingState } from "./states/LoadingState.js";
export class Game {
    constructor() {
        this.state = new LoadingState();
    }
    draw(ctx) {
        this.state.draw(ctx);
    }
    update() {
        this.state.update();
    }
}
//# sourceMappingURL=Game.js.map
import { LoadingScene } from "./scenes/LoadingScene.js";
export class Game {
    constructor() {
        this.scene = new LoadingScene();
    }
    draw(ctx) {
        this.scene.draw(ctx);
    }
    update() { }
}
//# sourceMappingURL=Game.js.map
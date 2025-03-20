import { LoadingScene } from "./scenes/LoadingScene.js";
export class Game {
    constructor() {
        this.scene = new LoadingScene();
    }
    draw(ctx) {
        this.scene.draw(ctx);
    }
    update() {
        this.scene.update();
    }
}
//# sourceMappingURL=Game.js.map
import { SIZES } from "../constants/game.js";
export class SceneLoaded {
    constructor(scene) {
        this.scene = scene;
    }
    draw(ctx) {
        ctx.clearRect(0, 0, SIZES.GAME_WIDTH, SIZES.GAME_HEIGHT);
        this.scene.menu.draw(ctx);
    }
    update() {
        this.scene.menu.update();
    }
    loadingScene() {
        return;
    }
    loadedScene() {
        return;
    }
}
//# sourceMappingURL=SceneLoaded.js.map
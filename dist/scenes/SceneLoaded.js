import { SIZES } from "../constants/game.js";
export class SceneLoaded {
    constructor(scene) {
        this.scene = scene;
    }
    draw(ctx) {
        ctx.clearRect(0, 0, SIZES.GAME_WIDTH, SIZES.GAME_HEIGHT);
        this.scene.screen.draw(ctx);
    }
    update() {
        this.scene.screen.update();
    }
}
//# sourceMappingURL=SceneLoaded.js.map
import { LoadingScene } from "../scenes/LoadingScene.js";
import { StateBase } from "./StateBase.js";
export class LoadingState extends StateBase {
    constructor() {
        super();
        this.scene = new LoadingScene();
    }
    draw(ctx) {
        this.scene.draw(ctx);
    }
    update() {
        this.scene.update();
    }
    resume() {
        throw new Error("Method not implemented.");
    }
    pause() {
        throw new Error("Method not implemented.");
    }
}
//# sourceMappingURL=LoadingState.js.map
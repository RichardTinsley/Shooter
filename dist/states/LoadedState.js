import { LoadedScene } from "../scenes/LoadedScene.js";
import { StateBase } from "./StateBase.js";
export class LoadedState extends StateBase {
    constructor() {
        super();
        this.scene = new LoadedScene(this);
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
//# sourceMappingURL=LoadedState.js.map
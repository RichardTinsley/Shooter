import { SceneLoaded } from "../scenes/SceneLoaded.js";
import { StateBase } from "./StateBase.js";
export class StateLoaded extends StateBase {
    constructor() {
        super();
        this.scene = new SceneLoaded();
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
//# sourceMappingURL=StateLoaded.js.map
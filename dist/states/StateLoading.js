import { SceneLoading } from "../scenes/SceneLoading.js";
import { State } from "./State.js";
export class StateLoading extends State {
    constructor() {
        super();
        this.scene = new SceneLoading();
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
//# sourceMappingURL=StateLoading.js.map
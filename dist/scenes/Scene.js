import { SceneLoaded } from "./SceneLoaded.js";
import { SceneLoading } from "./SceneLoading.js";
export class Scene {
    constructor() {
        this.loadingState = new SceneLoading(this);
        this.loadedState = new SceneLoaded(this);
        this.currentState = this.loadingState;
    }
    setState(state) {
        this.currentState = state;
    }
    getState() {
        return this.currentState;
    }
}
//# sourceMappingURL=Scene.js.map
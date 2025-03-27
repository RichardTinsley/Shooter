import { SceneLoaded } from "./SceneLoaded.js";
import { SceneLoading } from "./SceneLoading.js";
export class Scene {
    constructor() {
        this.loadingState = new SceneLoading(this);
        this.loadedState = new SceneLoaded(this);
        this.setState(this.loadingState);
    }
    setState(state) {
        this.currentState = state;
    }
    getCurrentState() {
        return this.currentState;
    }
}
//# sourceMappingURL=Scene.js.map